import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const MiMovil = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { container, paddingapp, row, h2, body, bold, caption, mt1, mb1, mb2, mb3, btnprimary, btnprimarytext, modaloverlay, modalcontent } = bs;
  
  const fotosLocales = [
    require('../../assets/MiPerfil/bici1.jpg'),
    require('../../assets/MiPerfil/bici2.jpg'),
    require('../../assets/MiPerfil/bici3.jpg'),
    require('../../assets/MiPerfil/bici4.jpg'),
  ];

  return (
    <View style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[row, styles.header, paddingapp]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={[h2, styles.ml15]}>Mi móvil</Text>
        </View>

        <View style={styles.galleryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.pl25}>
            {fotosLocales.map((img, index) => (
              <Image key={index} source={img} style={styles.bikeImage} resizeMode="cover" />
            ))}
          </ScrollView>
        </View>

        <View style={[paddingapp, styles.mb30]}>
          <View style={[row, mb3]}>
            <View style={styles.flex1}>
              <Text style={[caption, bold, styles.uppercase]}>Marca</Text>
              <Text style={[body, bold]}>Specialized</Text>
            </View>
            
            <View style={styles.flex1}>
              <Text style={[caption, bold, styles.uppercase]}>Referencia</Text>
              <Text style={[body, bold]}>Sirrus X 4.0</Text>
            </View>
          </View>
          
          <View style={mb3}>
            <Text style={[caption, bold, styles.uppercase]}>Año de compra</Text>
            <Text style={[body, bold]}>2023</Text>
          </View>

          <View>
            <Text style={[caption, bold, styles.uppercaseMb10]}>Accesorios registrados</Text>
            <View style={styles.chipContainer}>
              {['Casco negro', 'Luces LED', 'Candado', 'Guantes'].map((item, i) => (
                <View key={i} style={styles.chip}>
                  <Ionicons name="checkmark-circle" size={14} color={theme.colors.black} style={styles.mr5} />
                  <Text style={[caption, bold]}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={paddingapp}>
          <TouchableOpacity style={btnprimary} onPress={() => setModalVisible(true)}>
            <Text style={btnprimarytext}>Editar datos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalPaddingCenter]}>
            <Ionicons name="construct-outline" size={50} color={theme.colors.black} style={mb2} />
            <Text style={[h2, mb1]}>Función no activada</Text>
            <Text style={[body, styles.textCenter, mb3]}>Pronto podrás actualizar la info de tu bicicleta.</Text>
            <TouchableOpacity style={[btnprimary, styles.w100]} onPress={() => setModalVisible(false)}>
              <Text style={btnprimarytext}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  galleryContainer: { 
    height: 180, 
    marginBottom: 20 
  },
  pl25: { 
    paddingLeft: 25 
  },
  bikeImage: { 
    width: 220, 
    height: 150, 
    borderRadius: 15, 
    marginRight: 15, 
    backgroundColor: theme.colors.lightgray 
  },
  mb30: { 
    marginBottom: 30 
  },
  flex1: { 
    flex: 1 
  },
  uppercase: { 
    textTransform: 'uppercase' 
  },
  uppercaseMb10: { 
    textTransform: 'uppercase', 
    marginBottom: 10 
  },
  chipContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap' 
  },
  chip: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: theme.colors.lightgray, 
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 20, 
    marginRight: 8, 
    marginBottom: 8, 
    borderWidth: 1, 
    borderColor: theme.colors.border 
  },
  mr5: { 
    marginRight: 5 
  },
  modalPaddingCenter: { 
    padding: 30, 
    alignItems: 'center' 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  w100: { 
    width: '100%' 
  }
});

export default MiMovil;