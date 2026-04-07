import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme, bs } from '../../theme'; 
import TipsSeguridad from '../components/TipsSeguridad'; 
import PreviewReportes from '../components/PreviewReportes';

const Inicio = ({ navigation }) => {
  return (
    <ScrollView style={bs.containerHome} showsVerticalScrollIndicator={false}>
      <View style={[bs.paddingapp, { paddingTop: 60 }]}>
        <Text style={bs.h1}>Bienvenida, Paola</Text>
        <Text style={[bs.body, bs.mt1]}>¿A dónde pedaleamos hoy?</Text>
      </View>

      <View style={[bs.row, bs.jcbetween, bs.paddingapp, bs.mt5]}>
        <TouchableOpacity 
          style={styles.btnWrapper} 
          onPress={() => navigation.navigate('Rutas')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#406DFB', '#406DFB']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.accesoBtn}
          >
            <Ionicons name="play-circle-outline" size={26} color="#FFFFFF" />
            <Text style={styles.btnText}>Rutas</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnWrapper} 
          onPress={() => navigation.navigate('MiMovil')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#406DFB', '#406DFB']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.accesoBtn}
          >
            <Ionicons name="bicycle-outline" size={26} color="#FFFFFF" />
            <Text style={styles.btnText}>Mi Bici</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.btnWrapper} 
          onPress={() => navigation.navigate('Planes')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#406DFB', '#406DFB']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.accesoBtn}
          >
            <Ionicons name="ribbon-outline" size={26} color="#FFFFFF" />
            <Text style={styles.btnText}>Planes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={bs.mt4}>
        <TipsSeguridad />
      </View>

      <View style={[bs.mt5, bs.mb5]}>
        <Text style={[bs.h2, bs.paddingapp, bs.mb3]}>Reportes recientes</Text>
        <PreviewReportes />
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    width: '30%',
  },
  accesoBtn: { 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default Inicio;