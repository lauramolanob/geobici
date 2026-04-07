import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const Perfil = ({ navigation }) => {
  const [modalLogout, setModalLogout] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const { container, paddingapp, h1, h2, body, caption, row, mt2, mt3, mb2, mb3, mb4, bold, modaloverlay, modalcontent, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext } = bs;

  const opciones = [
    { id: '1', nombre: 'Mi Perfil', icon: 'person-outline', ruta: 'MisDatos' },
    { id: '2', nombre: 'Mi móvil', icon: 'bicycle-outline', ruta: 'MiMovil' },
    { id: '3', nombre: 'Historial', icon: 'time-outline', ruta: 'MiHistorial' },
    { id: '4', nombre: 'Plan', icon: 'star-outline', ruta: 'Planes' },
    { id: '5', nombre: 'Ayuda', icon: 'help-buoy-outline', ruta: 'Ayuda' },
  ];

  const resetToWelcome = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <View style={[container, styles.pt80]}>
      <Text style={[h1, paddingapp, styles.mb20]}>Configuración</Text>
      
      <FlatList 
        data={opciones}
        keyExtractor={item => item.id}
        contentContainerStyle={paddingapp}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => navigation.navigate(item.ruta)}>
          
            <Ionicons name={item.icon} size={22} color={theme.colors.black} />
            <Text style={[body, styles.flex1ml15]}>{item.nombre}</Text>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.black} />
          </TouchableOpacity>
        )}
      />

      <View style={[paddingapp, styles.pb40]}>
        <TouchableOpacity style={[btnsecondary, row, styles.jcCenter]} onPress={() => setModalLogout(true)}>
          <Ionicons name="log-out-outline" size={22} color={theme.colors.mediumgray} />
          <Text style={[body, bold, styles.ml10Gray]}>Cerrar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[mt3, mb4]} onPress={() => setModalEliminar(true)}>
          <Text style={[caption, styles.deleteText]}>Eliminar mi cuenta permanentemente</Text>
        </TouchableOpacity>
      </View>
      
      <Modal visible={modalLogout} transparent animationType="fade">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalInner]}>
            <Ionicons name="exit-outline" size={50} color={theme.colors.black} style={mb2} />
            <Text style={[h2, mb2]}>¿Cerrar sesión?</Text>

            <TouchableOpacity style={styles.w100Btn} onPress={resetToWelcome}>
              <View style={btnprimary}><Text style={btnprimarytext}>Sí, salir</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.w100Btn, mt2]} onPress={() => setModalLogout(false)}>
              <View style={[btnsecondary, styles.noBorder]}><Text style={btnsecondarytext}>Cancelar</Text></View>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

      <Modal visible={modalEliminar} transparent animationType="slide">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalInner]}>
            <Ionicons name="trash-outline" size={50} color={theme.colors.black} style={mb2} />
            <Text style={[h2, mb2]}>¿Estás seguro?</Text>
            <Text style={[body, styles.textCenter, mb3]}>Esta acción borrará todo tu historial. No se puede deshacer.</Text>

            <TouchableOpacity style={styles.w100Btn} onPress={resetToWelcome}>
              <View style={btnprimary}><Text style={btnprimarytext}>Eliminar para siempre</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.w100Btn, mt2]} onPress={() => setModalEliminar(false)}>
              <View style={[btnsecondary, styles.noBorder]}><Text style={btnsecondarytext}>Mejor no</Text></View>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pt80: { 
    paddingTop: 80 
  },
  mb20: { 
    marginBottom: 20 
  },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 18, 
    borderBottomWidth: 1, 
    borderBottomColor: theme.colors.border,
  },
  flex1ml15: { 
    flex: 1, 
    marginLeft: 15 
  },
  pb40: { 
    marginBottom: 40 
  },
  jcCenter: { 
    justifyContent: 'center' 
  },
  ml10Gray: { 
    marginLeft: 10, 
    color: theme.colors.mediumgray 
  },
  deleteText: { 
    textAlign: 'center', 
    textDecorationLine: 'underline',
    color: '#ff0000'
  },
  modalInner: { 
    padding: 30, 
    alignItems: 'center' 
  },
  w100Btn: { 
    width: '100%' 
  },
  noBorder: { 
    borderWidth: 0 
  },
  textCenter: { 
    textAlign: 'center' 
  }
});

export default Perfil;