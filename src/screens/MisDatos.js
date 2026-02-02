import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const MisDatos = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { container, paddingapp, row, h2, body, bold, caption, mt1, mt3, mb1, mb2, mb3, mb4, btnprimary, btnprimarytext, modaloverlay, modalcontent, center } = bs;

  return (
    <View style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[row, styles.header, paddingapp]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={[h2, styles.ml15]}>Mis Datos</Text>
        </View>

        <View style={[center, mb4]}>
          <Image 
            source={require('../../assets/MiPerfil/foto_perfil.jpg')} 
            style={styles.avatar}/>
          <Text style={[h2, mt1]}>Paola</Text>
          <Text style={body}>Ciclista Urbana</Text>
        </View>

        <View style={[paddingapp, styles.mb30]}>
          <Text style={[caption, bold, mb3, styles.sectionLabel]}>Información personal</Text>
          <View style={styles.dataRow}>
            <Ionicons name="call-outline" size={20} color={theme.colors.mediumgray} />
            <Text style={[body, styles.ml15]}>+57 300 123 4567</Text>
          </View>

          <View style={styles.dataRow}>
            <Ionicons name="mail-outline" size={20} color={theme.colors.mediumgray} />
            <Text style={[body, styles.ml15]}>paola@email.com</Text>
          </View>

          <Text style={[caption, bold, mb3, mt3, styles.sectionLabel]}>Contacto de emergencia</Text>
          <View style={styles.dataRow}>
            <Ionicons name="person-outline" size={20} color={theme.colors.mediumgray} />
            <Text style={[body, styles.ml15]}>Martha Gómez (Madre)</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Ionicons name="alert-circle-outline" size={20} color={theme.colors.mediumgray} />
            <Text style={[body, styles.ml15]}>+57 310 987 6543</Text>
          </View>
        </View>

        <View style={paddingapp}>
          <TouchableOpacity style={btnprimary} onPress={() => setModalVisible(true)}>
            <Text style={btnprimarytext}>Editar Datos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.h30} />
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={modaloverlay}>
          <View style={[modalcontent, styles.modalPaddingCenter]}>
            <Ionicons name="construct-outline" size={50} color={theme.colors.black} style={mb2} />
            <Text style={[h2, mb1]}>Función no activada</Text>
            <Text style={[body, styles.textCenter, mb3]}>Estamos trabajando para que pronto puedas editar tu perfil.</Text>
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
    marginBottom: 30 
  },
  ml15: { 
    marginLeft: 15 
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 10, 
    borderWidth: 2, 
    borderColor: theme.colors.border 
  },
  mb30: { 
    marginBottom: 30 
  },
  sectionLabel: { 
    letterSpacing: 1, 
    textTransform: 'uppercase' 
  },
  dataRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20, 
    paddingBottom: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: theme.colors.border 
  },
  h30: { 
    height: 30 
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

export default MisDatos;