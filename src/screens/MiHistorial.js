import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';
import PreviewReportes from '../components/PreviewReportes';
import Recorridos from '../components/Recorridos';

const MiHistorial = ({ navigation }) => {
  const [tabActiva, setTabActiva] = useState('Reportes');
  const { container, paddingapp, row, h2, bold } = bs;

  return (
    <View style={container}>
      <View style={[row, styles.header, paddingapp]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <Text style={[h2, styles.ml15]}>Mi Historial</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, tabActiva === 'Reportes' && styles.tabActive]} 
          onPress={() => setTabActiva('Reportes')}>  
          <Text style={[styles.tabText, tabActiva === 'Reportes' && bold]}>Reportes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, tabActiva === 'Rutas' && styles.tabActive]} 
          onPress={() => setTabActiva('Rutas')}>
          <Text style={[styles.tabText, tabActiva === 'Rutas' && bold]}>Rutas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flex1}>
        {tabActiva === 'Reportes' ? <PreviewReportes /> : <Recorridos />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { 
    marginTop: 60, 
    marginBottom: 20 
  },
  ml15: { 
    marginLeft: 15 
  },
  tabContainer: { 
    flexDirection: 'row', 
    marginHorizontal: 25, 
    backgroundColor: theme.colors.lightgray, 
    borderRadius: 12, 
    padding: 4, 
    marginBottom: 20 
  },
  tab: { 
    flex: 1, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 10 
  },
  tabActive: { 
    backgroundColor: theme.colors.white, 
    elevation: 2 
  },
  tabText: { 
    color: theme.colors.mediumgray, 
    fontSize: 14 
  },
  flex1: { 
    flex: 1 
  }
});

export default MiHistorial;