import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import { theme, bs } from '../../theme'; 

const LoginForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSend, setModalSend] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { h1, body, caption, mt1, mt2, mt3, mt4, mb3, mb4, bold, row, center, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext, modaloverlay, modalcontent } = bs;
  
  const handleLogin = () => {
    if (email.toLowerCase() === 'prueba' && password === 'prueba') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      navigation.navigate('MainApp'); 
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert("Acceso denegado", "Usuario o contraseña incorrectos.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.transparentBg}>
        <View style={mb4}>
          <Text style={[h1, styles.logoSize]}>Geobici</Text>
          <Text style={[body, mt1]}>Muévete con confianza 🚲</Text>
        </View>

        <View style={mb4}>
          <TextInput
            style={styles.customInput}
            placeholder="Email o número de teléfono"
            placeholderTextColor={theme.colors.mediumgray}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Contraseña"
              placeholderTextColor={theme.colors.mediumgray}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={22} 
                color={theme.colors.mediumgray} 
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={() => setModalVisible(true)} style={mt2}>
            <Text style={[caption, styles.underline]}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        </View> 

        <TouchableOpacity style={btnprimary} onPress={handleLogin}>
          <Text style={btnprimarytext}>Ingresar</Text>
        </TouchableOpacity>

        <View style={[row, center, styles.separatorMargin]}>
          <View style={styles.line} />
          <Text style={[caption, styles.mx15]}>o</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={btnsecondary}>
          <Text style={btnsecondarytext}>Iniciar sesión con Google</Text>
        </TouchableOpacity>

        <View style={[row, center, mt4]}>
          <Text style={body}>¿No tienes cuenta? </Text>
          <TouchableOpacity>
            <Text style={[body, bold, styles.underline]}>Regístrate</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={modaloverlay}>
            <View style={[modalcontent, styles.modalPadding]}>
              <Text style={[bs.h2, bs.mb2, styles.textCenter]}>Recuperar contraseña</Text>
              <Text style={[body, bs.mb3, styles.textCenter]}>Escribe tu correo para enviarte un enlace único.</Text>
              <TextInput 
                style={styles.customInput} 
                placeholder="Email" 
                placeholderTextColor={theme.colors.mediumgray}
              />  
              <TouchableOpacity 
                onPress={() => { setModalVisible(false); setTimeout(() => setModalSend(true), 500); }} 
                style={btnprimary}
              >
                <Text style={btnprimarytext}>Enviar enlace</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={[center, mt3]} onPress={() => setModalVisible(false)}>
                <Text style={[body, { color: theme.colors.mediumgray }]}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal visible={modalSend} transparent animationType="fade">
          <View style={modaloverlay}>
            <View style={[modalcontent, styles.modalPadding, bs.aiCenter]}>
              <Ionicons name="checkmark-circle-outline" size={60} color="#666" style={bs.mb2} />
              <Text style={[bs.h2, bs.mb1]}>Enlace enviado</Text>
              <Text style={[body, bs.mb3, styles.textCenter]}>Revisa tu bandeja de entrada para continuar.</Text>
              <TouchableOpacity style={[btnprimary, styles.w100]} onPress={() => setModalSend(false)}>
                <Text style={btnprimarytext}>Entendido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  transparentBg: { 
    backgroundColor: 'transparent' 
  },
  logoSize: { 
    fontSize: 30 
  },
  customInput: { 
    height: 55, 
    borderWidth: 1.5, 
    borderColor: theme.colors.border, 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    fontSize: 16, 
    marginBottom: 15, 
    color: theme.colors.black 
  },
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1.5, 
    borderColor: theme.colors.border, 
    borderRadius: 12, 
    height: 55, 
    paddingRight: 15 
  },
  passwordInput: { 
    flex: 1, 
    paddingHorizontal: 15, 
    fontSize: 16 
  },
  underline: { 
    textDecorationLine: 'underline' 
  },
  separatorMargin: { 
    marginVertical: 20 
  },
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: theme.colors.border 
  },
  mx15: { 
    marginHorizontal: 15 
  },
  modalPadding: { 
    padding: 30 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  w100: { 
    width: '100%' 
  }
});

export default LoginForm;