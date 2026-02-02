import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import MapView from 'react-native-maps'; 
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const MisRutas = () => {
  const [modalSOS, setModalSOS] = useState(false);
  const [modalLlamando, setModalLlamando] = useState(false);
  const [modalAlerta, setModalAlerta] = useState(false);
  const [modalFinRuta, setModalFinRuta] = useState(false);
  const [contador, setContador] = useState(30);
  const [enRuta, setEnRuta] = useState(false);
  const { container, h2, body, mt1, mt2, mt3, mb2, mb4, modaloverlay, modalcontent, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext } = bs;

  useEffect(() => {
    let intervalo;
    if (modalSOS && contador > 0) {
      intervalo = setInterval(() => setContador((p) => p - 1), 1000);
    } else if (contador === 0) {
      clearInterval(intervalo);
      setModalSOS(false);
      setModalAlerta(true); 
    }
    return () => clearInterval(intervalo);
  }, [modalSOS, contador]);

  const toggleRuta = () => { 
    if (enRuta) { 
      setEnRuta(false); 
      setModalFinRuta(true); 
    } else { 
      setEnRuta(true); 
    } 
  };

  return (
    <View style={container}>
      <MapView 
        style={StyleSheet.absoluteFillObject} 
        initialRegion={{ latitude: 4.6097, longitude: -74.0817, latitudeDelta: 0.01, longitudeDelta: 0.01 }} 
        showsUserLocation={true}/>

      <TouchableOpacity 
        style={[styles.btnRuta, enRuta ? styles.bgGray : styles.bgBlack]} onPress={toggleRuta}>
        <Ionicons name={enRuta ? "stop" : "play"} size={24} color="white" style={styles.mr10} />
        <Text style={styles.textRuta}>{enRuta ? "Finalizar ruta" : "Iniciar ruta"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSos} onPress={() => { setContador(30); setModalSOS(true); }}>
        <Ionicons name="megaphone" size={32} color="white" />
        <Text style={styles.textSos}>SOS</Text>
      </TouchableOpacity>

      <Modal visible={modalSOS} transparent animationType="fade">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalPaddingCenter]}>
            <Text style={h2}>¿Estás en peligro?</Text>
            <Text style={[body, mt1, styles.textCenter]}>Se notificará a las autoridades en:</Text>
            <View style={styles.relojContainer}>
              <Text style={styles.relojText}>{contador}</Text>
            </View>

            <TouchableOpacity 
              style={[btnsecondary, styles.w100Dark]} 
              onPress={() => { setModalSOS(false); setModalLlamando(true); }}>
              <Text style={styles.textWhiteBold}>Llamar ahora (123)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={mt3} onPress={() => setModalSOS(false)}>
              <Text style={styles.textCancel}>Falsa alarma, cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={modalAlerta || modalFinRuta || modalLlamando} transparent animationType="slide">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalPaddingCenter]}>
            <Ionicons 
              name={modalAlerta ? "warning" : modalFinRuta ? "checkmark-circle" : "call"} 
              size={60} color={theme.colors.black} style={mb2}/>

            <Text style={h2}>{modalAlerta ? "¡Alerta Enviada!" : modalFinRuta ? "Ruta Guardada" : "Conectando..."}</Text>
            
            <Text style={[body, styles.textCenter, mt2, mb4]}>
              {modalAlerta ? "Autoridades notificadas." : modalFinRuta ? "Añadido al historial." : "Marcando al 123..."}
            </Text>

            <TouchableOpacity style={btnprimary} onPress={() => { setModalAlerta(false); setModalFinRuta(false); setModalLlamando(false); }}>
              <Text style={btnprimarytext}>Entendido</Text>
            </TouchableOpacity>            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btnRuta: { 
    position: 'absolute', 
    bottom: 40, 
    alignSelf: 'center', 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 18, 
    paddingHorizontal: 35, 
    borderRadius: 30, 
    elevation: 6 
  },
  bgBlack: { 
    backgroundColor: theme.colors.black 
  },
  bgGray: { 
    backgroundColor: theme.colors.mediumgray 
  },
  mr10: { 
    marginRight: 10 
  },
  textRuta: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  btnSos: { 
    position: 'absolute', 
    bottom: 120, 
    right: 25, 
    backgroundColor: theme.colors.darkgray, 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 8, 
    borderWidth: 3, 
    borderColor: 'white' 
  },
  textSos: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  modalPaddingCenter: { 
    padding: 30, 
    alignItems: 'center' 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  relojContainer: { 
    width: 110, 
    height: 110, 
    borderRadius: 55, 
    borderWidth: 4, 
    borderColor: theme.colors.black, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 25 
  },
  relojText: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    color: theme.colors.black 
  },
  w100Dark: { 
    width: '100%', 
    backgroundColor: theme.colors.mediumgray, 
    borderWidth: 0 
  },
  textWhiteBold: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  textCancel: { 
    color: theme.colors.mediumgray, 
    textDecorationLine: 'underline' 
  }
});

export default MisRutas;