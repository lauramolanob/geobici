import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';
import PreviewReportes from '../components/PreviewReportes';

const AllReports = ({ navigation, route }) => {
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  const [filtroFecha, setFiltroFecha] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [reportesLocales, setReportesLocales] = useState([]);
  const { container, paddingapp, h1, row, mt1, mt2, mt5, bold, caption } = bs;

  useEffect(() => {
    if (route.params?.nuevoReporte) {
      setReportesLocales(prev => [route.params.nuevoReporte, ...prev]);
      navigation.setParams({ nuevoReporte: null });
    }
  }, [route.params?.nuevoReporte]);

  const categorias = ['Todos', 'Robo', 'Siniestro'];
  const tiempos = ['Todos', 'Hoy', 'Esta Semana'];

  return (
    <View style={container}>
      <View style={[paddingapp, styles.pt60mb15]}>
        <Text style={[h1, styles.pt15]}>Historial de reportes</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={theme.colors.mediumgray} style={styles.mr10} />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Buscar zona, calle o detalle..." 
          placeholderTextColor={theme.colors.mediumgray}
          value={busqueda}
          onChangeText={setBusqueda}/>

        {busqueda.length > 0 && (
          <TouchableOpacity onPress={() => setBusqueda('')}>
            <Ionicons name="close-circle" size={20} color={theme.colors.border} />
          </TouchableOpacity>)}
      </View>

      <View style={styles.filterSection}> 
        <ScrollView style={paddingapp}>
          <View style={row}>
            <Text style={[caption, bold, styles.w50]}>Tipo </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categorias.map((cat) => (
                <TouchableOpacity 
                  key={cat} 
                  onPress={() => setFiltroTipo(cat)}
                  style={[styles.pill, filtroTipo === cat && styles.pillActive]}>

                  <Text style={[styles.pillText, filtroTipo === cat && styles.textActive]}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={[row, styles.mt10]}>
            <Text style={[caption, bold, styles.w50]}>Fecha </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {tiempos.map((time) => (
                <TouchableOpacity 
                  key={time} 
                  onPress={() => setFiltroFecha(time)}
                  style={[styles.pill, filtroFecha === time && styles.pillActive]}>

                  <Text style={[styles.pillText, filtroFecha === time && styles.textActive]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <View style={styles.flex1}>
        <PreviewReportes 
          filtroTipo={filtroTipo} 
          filtroFecha={filtroFecha}
          filtroTexto={busqueda}
          reportesAdicionales={reportesLocales}/>
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('NewReport')}>
        <Ionicons name="add" size={32} color="white"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pt60mb15: { 
    paddingTop: 60, 
    marginBottom: 15 
  },
  pt15: { 
    paddingTop: 15 
  },
  searchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: theme.colors.lightgray, 
    marginHorizontal: 25, 
    paddingHorizontal: 15, 
    borderRadius: 12, 
    height: 50, 
    marginBottom: 15 
  },
  mr10: { 
    marginRight: 10 
  },
  searchInput: { 
    flex: 1, 
    fontSize: 14, 
    color: theme.colors.black, 
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    paddingHorizontal: 14
  },
  filterSection: { 
    height: 100 
  },
  w50: { 
    width: 50 
  },
  mt10: { 
    marginTop: 10 
  },
  pill: { 
    paddingHorizontal: 14, 
    paddingVertical: 8, 
    borderRadius: 20, 
    backgroundColor: theme.colors.white, 
    borderWidth: 1, 
    borderColor: theme.colors.border, 
    marginRight: 8 
  },
  pillActive: { 
    backgroundColor: theme.colors.black, 
    borderColor: theme.colors.black 
  },
  pillText: { 
    fontSize: 12, 
    color: theme.colors.mediumgray 
  },
  textActive: { 
    color: theme.colors.white, 
    fontWeight: 'bold' 
  },
  flex1: { 
    flex: 1 
  },
  fab: { 
    position: 'absolute', 
    bottom: 30, 
    right: 25, 
    backgroundColor: theme.colors.blue, 
    width: 64, 
    height: 64, 
    borderRadius: 32, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5 
  }
});

export default AllReports;