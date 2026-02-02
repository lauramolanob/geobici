import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const Recorridos = () => {
  const { card, row, bold, body, caption, mt1 } = bs;
  const rutasMock = [
    { id: '1', fecha: '30 Ene', inicio: '07:00 AM', fin: '07:45 AM', desde: 'Calle 100', hasta: 'Centro' },
    { id: '2', fecha: '28 Ene', inicio: '18:30 PM', fin: '19:15 PM', desde: 'Oficina', hasta: 'Casa' },
  ];

  const renderItem = ({ item }) => (
    <View style={[card, row, styles.cardMargin]}>
      <View style={styles.leftCol}>
        <View style={styles.iconBox}>
          <Ionicons name="bicycle" size={24} color={theme.colors.black} />
        </View>
        <Text style={[caption, bold]}>{item.fecha}</Text>
      </View>
      <View style={styles.rightCol}>
        <View style={row}>
          <Ionicons name="time-outline" size={14} color={theme.colors.mediumgray} />
          <Text style={[caption, styles.ml8]}>{item.inicio} - {item.fin}</Text>
        </View>
        <View style={[row, mt1]}>
          <Ionicons name="navigate-circle-outline" size={14} color={theme.colors.mediumgray} />
          <Text style={[caption, styles.ml8]} numberOfLines={1}>{item.desde} ➝ {item.hasta}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList 
      data={rutasMock}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listPadding}
      showsVerticalScrollIndicator={false}/>
  );
};

const styles = StyleSheet.create({
  cardMargin: { 
    marginBottom: 15, 
    padding: 15 
  },
  leftCol: { 
    alignItems: 'center', 
    borderRightWidth: 1, 
    borderRightColor: theme.colors.border, 
    paddingRight: 15 
  },
  iconBox: { 
    width: 45, 
    height: 45, 
    borderRadius: 25, 
    backgroundColor: theme.colors.lightgray, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 5 
  },
  rightCol: { 
    flex: 1, 
    paddingLeft: 15 
  },
  ml8: { 
    marginLeft: 8 
  },
  listPadding: { 
    paddingHorizontal: 25, 
    paddingTop: 15 
  }
});

export default Recorridos;