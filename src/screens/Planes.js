import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const Planes = ({ navigation }) => {
  const { container, paddingapp, h1, body, bold, caption, mt1, mt2, mt4, btnprimary, btnprimarytext } = bs;

  return (
    <View style={[container, styles.center]}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={26} color={theme.colors.black} />
      </TouchableOpacity>
      
      <View style={styles.card}>
        <Ionicons name="star-outline" size={60} color={theme.colors.black} style={styles.mb20} />
        <Text style={caption}>Plan actual</Text>
        <Text style={[h1, mt1]}>Freemium</Text>
        <Text style={[body, styles.textCenter, mt2]}>Acceso básico a reportes y rutas comunitarias.</Text>
      </View>

      <Text style={styles.ctaText}>
        ¿Quieres subir de nivel y obtener seguros contra robo?
      </Text>

      <TouchableOpacity 
        style={[btnprimary, styles.w100]} 
        onPress={() => navigation.navigate('Ayuda')}>
          
        <Text style={btnprimarytext}>Sí, quiero</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    padding: 25
  },
  backBtn: { 
    position: 'absolute', 
    top: 60, 
    left: 25 
  },
  card: { 
    backgroundColor: theme.colors.lightgray, 
    padding: 40, 
    borderRadius: 25, 
    alignItems: 'center', 
    marginBottom: 40 
  },
  mb20: { 
    marginBottom: 20 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  ctaText: { 
    textAlign: 'center', 
    fontSize: 16, 
    fontWeight: '600', 
    marginBottom: 20, 
    paddingHorizontal: 20 
  },
  w100: { 
    width: '100%' 
  }
});

export default Planes;