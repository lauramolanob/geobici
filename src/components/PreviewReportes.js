import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme'; 
import reportesMock from '../data/reportesMock.json';

const PreviewReportes = ({ filtroTipo = "Todos", filtroFecha = "Todos", filtroTexto = "", reportesAdicionales = [] }) => {
  const [reporteSeleccionado, setReporteSeleccionado] = useState(null);
  
  const { 
    card, row, h2, body, bold, caption, 
    mt1, mt2, mt3, mt4, mt5, 
    mb1, mb2, mb3, mb4, 
    modaloverlay, modalcontent, 
    btnprimary, btnprimarytext, center 
  } = bs;

  const todosLosReportes = [...reportesAdicionales, ...reportesMock];

  const datosFiltrados = todosLosReportes.filter(item => {
    const coincideTipo = filtroTipo === 'Todos' || item.tipo === filtroTipo;
    
    const textoBuscado = filtroTexto.toLowerCase();
    const coincideTexto = item.ubicacion?.toLowerCase().includes(textoBuscado) 
      || item.tipo?.toLowerCase().includes(textoBuscado) 
      || item.descripcion?.toLowerCase().includes(textoBuscado);

    let coincideFecha = true;
    if (filtroFecha !== 'Todos') {
      const timestamp = parseInt(item.id);
      if (!isNaN(timestamp)) {
        const fechaReporte = new Date(timestamp);
        const hoy = new Date();
        if (filtroFecha === 'Hoy') {
          coincideFecha = fechaReporte.toDateString() === hoy.toDateString();
        } else {
          coincideFecha = fechaReporte >= new Date(hoy.getTime() - 604800000);
        }
      }
    }
    return coincideTipo && coincideTexto && coincideFecha;
  });

  return (
    <View style={styles.flex1}>
      <FlatList
        data={datosFiltrados}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[card, row, styles.cardContainer]} 
            onPress={() => setReporteSeleccionado(item)}
          >
            <Image 
              source={{ uri: item.foto_url || item.imagen }} 
              style={styles.cardImage} 
            />
            <View style={styles.contentContainer}>
              <Text style={[caption, bold, styles.grayText]}>
                {item.fecha || 'Reciente'}
              </Text>
              <Text style={[body, bold]} numberOfLines={1}>
                {item.tipo}
              </Text>
              <View style={[row, mt1]}>
                <Ionicons name="location-outline" size={14} color={theme.colors.black} />
                <Text style={[caption, styles.locationText]} numberOfLines={1}>
                  {item.ubicacion}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        ListEmptyComponent={
          <View style={[center, mt5]}>
            <Ionicons name="search-outline" size={40} color={theme.colors.border} />
            <Text style={[caption, mt2]}>No se encontraron reportes.</Text>
          </View>
        }/>

      <Modal 
        visible={!!reporteSeleccionado} 
        transparent 
        animationType="slide">

        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalHeight]}>
            {reporteSeleccionado && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image 
                  source={{ uri: reporteSeleccionado.foto_url || reporteSeleccionado.imagen }} 
                  style={styles.modalImg}/>
                <View style={styles.modalPadding}>
                  <Text style={[caption, bold, mb1]}>
                    {reporteSeleccionado.fecha} • {reporteSeleccionado.hora}
                  </Text>
                  <Text style={[h2, mb2]}>
                    {reporteSeleccionado.tipo}
                  </Text>
                  <View style={row}>
                    <Ionicons name="location-sharp" size={20} color={theme.colors.black} />
                    <Text style={[body, styles.modalLocation]}>
                      {reporteSeleccionado.ubicacion}
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <Text style={[body, bold, mb1]}>
                    Notas del reporte:
                  </Text>
                  <Text style={[body, mb4]}>
                    {reporteSeleccionado.descripcion || reporteSeleccionado.notas || "Sin detalles."}
                  </Text>
                  <TouchableOpacity 
                    style={btnprimary} 
                    onPress={() => setReporteSeleccionado(null)}>
                    <Text style={btnprimarytext}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: { 
    flex: 1 
  },
  cardContainer: { 
    marginHorizontal: 25, 
    marginBottom: 15, 
    height: 110 
  },
  cardImage: { 
    width: 100, 
    height: '100%', 
    backgroundColor: theme.colors.lightgray 
  },
  contentContainer: { 
    flex: 1, 
    padding: 15, 
    justifyContent: 'center' 
  },
  grayText: { 
    color: theme.colors.mediumgray 
  },
  locationText: { 
    marginLeft: 4, 
    flex: 1 
  },
  modalHeight: { 
    maxHeight: '85%' 
  },
  modalImg: { 
    width: '100%', 
    height: 250 
  },
  modalPadding: { 
    padding: 25 
  },
  modalLocation: { 
    marginLeft: 8 
  },
  divider: { 
    height: 1, 
    backgroundColor: theme.colors.border, 
    marginVertical: 20 
  },
});

export default PreviewReportes;