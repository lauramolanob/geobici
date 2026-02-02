import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { theme, bs } from '../../theme';

const NewReport = ({ navigation }) => {
  const [tipo, setTipo] = useState(null);
  const [ubicacion, setUbicacion] = useState('');
  const [notas, setNotas] = useState('');
  const [imagen, setImagen] = useState(null);
  const [modalExito, setModalExito] = useState(false);
  const { container, paddingapp, h2, body, bold, mt2, mt3, mt4, mb1, mb2, mb4, btnprimary, btnprimarytext, modaloverlay, modalcontent, center } = bs;

  const seleccionarImagen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });
    if (!result.canceled) setImagen(result.assets[0].uri);
  };

  const cerrarModalYVolver = () => {
    setModalExito(false);
    const reporte = {
      id: Date.now().toString(),
      tipo: tipo,
      ubicacion: ubicacion,
      foto_url: imagen || 'https://images.unsplash.com/photo-1576435728678-35d016018183?w=500',
      fecha: '31 Ene',
      hora: 'Ahora',
      descripcion: notas || 'Sin comentarios adicionales.'
    };
    navigation.navigate({ name: 'AllReportsList', params: { nuevoReporte: reporte }, merge: true });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[paddingapp, styles.header]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color={theme.colors.black} />
          </TouchableOpacity>

          <Text style={[h2, styles.ml15]}>Nuevo Reporte</Text>
        </View>

        <View style={[paddingapp, styles.pb50]}>
          <Text style={[body, bold, mt4, mb2]}>Tipo de incidente</Text>
          <View style={[bs.row, bs.jcbetween]}>
            <TouchableOpacity style={[styles.tipoBtn, tipo === 'Robo' && styles.bgBlack]} onPress={() => setTipo('Robo')}>
              <Text style={[styles.tipoText, tipo === 'Robo' && styles.textWhite]}>Robo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tipoBtn, tipo === 'Siniestro' && styles.bgBlack]} onPress={() => setTipo('Siniestro')}>
              <Text style={[styles.tipoText, tipo === 'Siniestro' && styles.textWhite]}>Siniestro</Text>
            </TouchableOpacity>
          </View>

          <Text style={[body, bold, mt3, mb2]}>Ubicación</Text>
          <TextInput style={styles.input} placeholder="¿Dónde ocurrió?" placeholderTextColor={theme.colors.mediumgray} value={ubicacion} onChangeText={setUbicacion} />

          <Text style={[body, bold, mt3, mb2]}>Notas / Detalles</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Describe qué pasó (opcional)..." 
            placeholderTextColor={theme.colors.mediumgray}
            value={notas} 
            onChangeText={setNotas} 
            multiline={true}/>

          <Text style={[body, bold, mt3, mb2]}>Evidencia</Text>
          <TouchableOpacity style={styles.fotoBtn} onPress={seleccionarImagen}>
            {imagen ? <Image source={{ uri: imagen }} style={styles.previewImage} /> : <Ionicons name="camera-outline" size={30} color={theme.colors.border} />}
          </TouchableOpacity>

          <TouchableOpacity style={[btnprimary, styles.mt40]} onPress={() => tipo && ubicacion && setModalExito(true)}>
            <Text style={btnprimarytext}>Enviar Reporte</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalExito} transparent animationType="fade">
          <View style={modaloverlay}>
            <View style={[modalcontent, styles.modalPadding]}>
              <Ionicons name="checkmark-circle-outline" size={60} color={theme.colors.black} style={styles.selfCenter} />
              <Text style={[h2, styles.textCenter]}>¡Reporte enviado!</Text>
              <Text style={[body, styles.textCenter, mt2, mb4]}>Gracias por colaborar con la comunidad.</Text>

              <TouchableOpacity style={btnprimary} onPress={cerrarModalYVolver}>
                <Text style={btnprimarytext}>Entendido</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: { 
    paddingTop: 60, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  ml15: { 
    marginLeft: 15 
  },
  pb50: { 
    paddingBottom: 50 
  },
  tipoBtn: { 
    width: '48%', 
    padding: 15, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: theme.colors.border, 
    alignItems: 'center' 
  },
  bgBlack: { 
    backgroundColor: theme.colors.black 
  },
  tipoText: { 
    fontWeight: 'bold', 
    color: theme.colors.black 
  },
  textWhite: { 
    color: 'white' 
  },
  input: { 
    backgroundColor: theme.colors.lightgray, 
    padding: 15, 
    borderRadius: 12, 
    color: theme.colors.black 
  },
  textArea: { 
    height: 100, 
    textAlignVertical: 'top' 
  },
  fotoBtn: { 
    height: 150, 
    backgroundColor: theme.colors.lightgray, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    overflow: 'hidden' 
  },
  previewImage: { 
    width: '100%', 
    height: '100%' 
  },
  mt40: { 
    marginTop: 40 
  },
  modalPadding: { 
    padding: 30 
  },
  selfCenter: { 
    alignSelf: 'center', 
    marginBottom: 15 
  },
  textCenter: { 
    textAlign: 'center' 
  }
});

export default NewReport;