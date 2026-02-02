import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme'; 
import TipsSeguridad from '../components/TipsSeguridad'; 
import PreviewReportes from '../components/PreviewReportes';

const Inicio = ({ navigation }) => {
  return (
    <ScrollView style={bs.container} showsVerticalScrollIndicator={false}>
      <View style={[bs.paddingapp, { paddingTop: 80 }]}>
        <Text style={bs.h1}>Bienvenida, Paola</Text>
        <Text style={[bs.body, bs.mt1]}>¿A dónde pedaleamos hoy?</Text>
      </View>

      <View style={[bs.row, bs.jcbetween, bs.paddingapp, bs.mt5]}>
        <TouchableOpacity style={styles.accesoBtn} onPress={() => navigation.navigate('Rutas')}>
          <Ionicons name="play-circle-outline" size={26} color="black" />
          <Text style={[bs.caption, bs.bold, bs.mt1]}>Rutas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accesoBtn} onPress={() => navigation.navigate('MiMovil')}>
          <Ionicons name="phone-portrait-outline" size={26} color="black" />
          <Text style={[bs.caption, bs.bold, bs.mt1]}>Móvil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.accesoBtn} onPress={() => navigation.navigate('Planes')}>
          <Ionicons name="ribbon-outline" size={26} color="black" />
          <Text style={[bs.caption, bs.bold, bs.mt1]}>Planes</Text>
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
  accesoBtn: { 
    width: '30%', 
    backgroundColor: '#f5f5f5', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#eee' 
  }
});

export default Inicio;