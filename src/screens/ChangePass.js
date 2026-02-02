import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme'; 

const ChangePass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalWin, setModalWin] = useState(false);
  const { container, paddingapp, h1, h2, body, mt1, mt3, mb2, mb4, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext, modaloverlay, modalcontent } = bs;

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex1}>

        <View style={[paddingapp, styles.pt40]}>
          
          <View style={mb4}>
            <Text style={h1}>Ya casi terminas 🥳</Text>
            <Text style={[body, mt1]}>Por favor escribe tu nueva contraseña</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nueva contraseña"
              placeholderTextColor={theme.colors.mediumgray}
              secureTextEntry={!showPass}
              value={password}
              onChangeText={setPassword}/>

            <TouchableOpacity onPress={() => setShowPass(!showPass)} style={styles.iconButton}>
              <Ionicons 
                name={showPass ? "eye-outline" : "eye-off-outline"} 
                size={22} 
                color={theme.colors.mediumgray}/>

            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmar nueva contraseña"
              placeholderTextColor={theme.colors.mediumgray}
              secureTextEntry={!showConfirm}
              value={confirmPassword}
              onChangeText={setConfirmPassword}/>

            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)} style={styles.iconButton}>
              <Ionicons 
                name={showConfirm ? "eye-outline" : "eye-off-outline"} 
                size={22} 
                color={theme.colors.mediumgray}/>

            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={[btnprimary, styles.mt30]} 
            onPress={() => setModalWin(true)}>
              
            <Text style={btnprimarytext}>Cambiar contraseña</Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAvoidingView>

      <Modal visible={modalWin} transparent animationType="slide">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalInner]}>
            <Ionicons name="checkmark-circle-outline" size={60} color="#4CAF50" style={styles.mb15} />
            <Text style={[h2, styles.textCenter]}>Contraseña actualizada</Text>
            <Text style={[body, mt3, mb4, styles.textCenter]}>¡Tu contraseña ha sido actualizada con éxito!</Text>
            
            <TouchableOpacity style={styles.w100}>
              <View style={btnprimary}>
                <Text style={btnprimarytext}>Volver al inicio de sesión</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.mt10} onPress={() => setModalWin(false)}>
              <Text style={styles.cancelLink}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: { 
    flex: 1 
  },
  pt40: { 
    paddingTop: 40 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1.5, 
    borderColor: theme.colors.border, 
    borderRadius: 12, 
    marginTop: 20,
    backgroundColor: theme.colors.lightgray
  },
  input: { 
    flex: 1, 
    padding: 15, 
    fontSize: 16, 
    color: theme.colors.black 
  },
  iconButton: { 
    paddingHorizontal: 15 
  },
  mt30: { 
    marginTop: 30 
  },
  mt10: {
    marginTop: 10
  },
  modalInner: { 
    padding: 30, 
    alignItems: 'center' 
  },
  mb15: { 
    marginBottom: 15 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  w100: { 
    width: '100%' 
  },
  cancelLink: {
    color: theme.colors.mediumgray,
    textDecorationLine: 'underline'
  }
});

export default ChangePass;