import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // ✅ AGREGAR ESTA LÍNEA
import { theme, bs } from '../../theme';

const ValidacionCorreo = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { container, paddingapp, h1, h2, body, bold, mt2, mt4, mb1, mb2, mb3, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext, modaloverlay, modalcontent } = bs;

  return (
    <SafeAreaView style={container}>
      <View style={paddingapp}>
        <Text style={h1}>Ya casi terminas 🥳</Text>
        <Text style={[body, mt2]}>
          Hemos enviado un código a tu correo electrónico para verificar tu cuenta.
        </Text>
        
        <TextInput 
          style={styles.input}
          placeholder="Introduce el código"
          placeholderTextColor={theme.colors.mediumgray}
          keyboardType="numeric"/>

        <TouchableOpacity 
          style={[btnprimary, mt4]}
          onPress={() => setModalVisible(true)}>

          <Text style={btnprimarytext}>Completar registro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mt4} onPress={() => {}}>
          <Text style={styles.resendText}>¿No recibiste el código? Reenviar</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={modaloverlay}>
            <View style={[modalcontent, styles.modalPadding, bs.aiCenter]}>
              <Ionicons name="checkmark-circle-outline" size={60} color="#4CAF50" style={mb2} />
              <Text style={[h2, mb1]}>Código validado ✅</Text>
              <Text style={[body, styles.textCenter, mb3]}>¡Estamos felices de acompañarte a pedalear!</Text>
              
              <TouchableOpacity style={[btnprimary, styles.w100]} onPress={() => navigation.navigate('MainApp')}>
                <Text style={btnprimarytext}>Explorar inicio</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[btnsecondary, styles.w100, mt2, styles.noBorder]} onPress={() => setModalVisible(false)}>
                <Text style={btnsecondarytext}>Cerrar</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: { 
    height: 55, 
    borderWidth: 1.5, 
    borderColor: theme.colors.border, 
    marginTop: 30, 
    paddingHorizontal: 15, 
    fontSize: 18, 
    borderRadius: 12,
    textAlign: 'center',
    letterSpacing: 5
  },
  modalPadding: { 
    padding: 30 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  w100: { 
    width: '100%' 
  },
  noBorder: {
    borderWidth: 0
  },
  resendText: {
    textAlign: 'center',
    color: theme.colors.mediumgray,
    textDecorationLine: 'underline'
  }
});

export default ValidacionCorreo;
