import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { bs } from '../../theme'; 
import tipsData from '../data/tipsData'; 

const { width } = Dimensions.get('window');

const TipsSeguridad = () => {
  const [tipSeleccionado, setTipSeleccionado] = useState(null);
  const { card, row, h2, body, bold, caption, mt1, mt3, mt4, mb2, mb3, paddingapp, jcbetween, btnprimary, btnprimarytext, modaloverlay, modalcontent } = bs;
  
  const navegar = (dir) => {
    const idx = tipsData.findIndex(t => t.id === tipSeleccionado.id);
    const next = dir === 'sig' ? (idx + 1) % tipsData.length : (idx - 1 + tipsData.length) % tipsData.length;
    setTipSeleccionado(tipsData[next]);
  };

  return (

    <View style={mt3}>
      <View style={[row, jcbetween, paddingapp, mb3]}>
        <Text style={h2}>Tips de seguridad</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 25 }}>
        {tipsData.map((tip) => (
          <TouchableOpacity key={tip.id} style={[card, { width: width * 0.5, marginRight: 15 }]} onPress={() => setTipSeleccionado(tip)}>
            <Image source={tip.imagen} style={{ width: '100%', height: 100 }} />
            <View style={{ padding: 15}}>
              <Text style={[body, bold]} numberOfLines={1}>{tip.titulo}</Text>
              <Text style={[caption, mt1]} numberOfLines={2}>{tip.descripcion}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={!!tipSeleccionado} transparent animationType="fade">
        <View style={modaloverlay}>
          <View style={modalcontent}>
            {tipSeleccionado && (
              <View>
                <Image source={tipSeleccionado.imagen} style={{ width: '100%', height: 200 }} />
                <View style={{ padding: 25 }}>
                  <Text style={[h2, mb2]}>{tipSeleccionado.titulo}</Text>
                  <Text style={body}>{tipSeleccionado.descripcion}</Text>
                  <TouchableOpacity style={[btnprimary, mt4]} onPress={() => setTipSeleccionado(null)}>
                    <Text style={btnprimarytext}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TipsSeguridad;
