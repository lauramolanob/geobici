import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme'; 

const RegisterForm = ({ onBackToLogin }) => {
  const { row, jccenter, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext, mt1, mt5, mb3, caption, bold, body } = bs;

  return (
    <View style={styles.transparentBg}>
      
      <TouchableOpacity style={btnsecondary} onPress={() => console.log("Google Auth")}>
        <Text style={btnsecondarytext}>Registrarse con Google</Text>
      </TouchableOpacity>

      <View style={[row, jccenter, styles.mv20]}>
        <View style={styles.line} />
        <Text style={[caption, styles.mh15]}>o</Text>
        <View style={styles.line} />
      </View>

      <View style={mb3}>
        <TextInput 
          style={styles.customInput} 
          placeholder="Nombres y apellidos" 
          placeholderTextColor={theme.colors.mediumgray}/>

        <TextInput 
          style={styles.customInput} 
          placeholder="Número de cédula" 
          placeholderTextColor={theme.colors.mediumgray} 
          keyboardType="numeric"/>

        <TextInput 
          style={styles.customInput} 
          placeholder="Número de teléfono" 
          placeholderTextColor={theme.colors.mediumgray} 
          keyboardType="phone-pad"/>

        <TextInput 
          style={styles.customInput} 
          placeholder="Correo electrónico" 
          placeholderTextColor={theme.colors.mediumgray} 
          keyboardType="email-address"/>
        
        <View style={styles.dateInputContainer}>
          <TextInput 
            style={styles.cleanInput} 
            placeholder="Fecha de nacimiento" 
            placeholderTextColor={theme.colors.mediumgray}/>

          <Ionicons 
            name="calendar-outline" 
            size={22} 
            color={theme.colors.mediumgray} 
            style={styles.pr15}/>
        </View>
      </View>

      <TouchableOpacity style={btnprimary} onPress={() => Keyboard.dismiss()}>
        <Text style={btnprimarytext}>Siguiente</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={mt5} 
        onPress={onBackToLogin}>
        <Text style={[body, styles.textCenter, styles.underline]}>
          Volver al inicio de sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  transparentBg: { 
    backgroundColor: 'transparent' 
  },
  mv20: { 
    marginVertical: 20 
  },
  mh15: { 
    marginHorizontal: 15 
  },
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: theme.colors.border 
  },
  customInput: { 
    height: 55, 
    borderWidth: 1.5, 
    borderColor: theme.colors.border, 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    fontSize: 16, 
    marginBottom: 12, 
    backgroundColor: theme.colors.white 
  },
  dateInputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1.5, 
    borderColor: theme.colors.border, 
    borderRadius: 12, 
    height: 55, 
    marginBottom: 12, 
    backgroundColor: theme.colors.white
  },
  cleanInput: { 
    flex: 1, 
    paddingHorizontal: 15, 
    fontSize: 16, 
    height: '100%' 
  },
  pr15: { 
    marginRight: 15 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  underline: { 
    textDecorationLine: 'underline' 
  }
});

export default RegisterForm;