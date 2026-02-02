import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';

const Ayuda = ({ navigation }) => {
  const [modalExito, setModalExito] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalSelector, setModalSelector] = useState(false);
  const [tema, setTema] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { container, paddingapp, row, h2, body, bold, mt1, mt2, mb1, mb2, mb3, btnprimary, btnprimarytext, btnsecondary, btnsecondarytext, modaloverlay, modalcontent } = bs;
  const opcionesTema = ["Cambio de plan", "Bloqueo de cuenta", "Seguridad", "Otros"];

  const enviar = () => {
    if (tema === '' || mensaje.trim() === '') {
      setModalError(true);
      return;
    }
    setModalExito(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <View style={[row, styles.header, paddingapp]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={[h2, styles.ml15]}>Ayuda y Soporte</Text>
        </View>

        <View style={paddingapp}>
          <Text style={[body, bold, mb2]}>¿Con qué necesitas ayuda?</Text>
          <TouchableOpacity 
            style={styles.selector} 
            onPress={() => setModalSelector(true)}>

            <Text style={[styles.selectorText, !tema && styles.placeholder]}>
              {tema || "Selecciona una opción"}
            </Text>
            <Ionicons name="chevron-down" size={20} color={theme.colors.mediumgray} />
          </TouchableOpacity>

          <Text style={[body, bold, mb2]}>Detalle del caso</Text>
          <TextInput 
            style={styles.textArea} 
            placeholder="Describe tu situación..." 
            placeholderTextColor={theme.colors.mediumgray}
            value={mensaje} 
            onChangeText={setMensaje} 
            multiline/>

          <TouchableOpacity style={[btnprimary, styles.mt10]} onPress={enviar}>
            <Text style={btnprimarytext}>Enviar Solicitud</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalSelector} transparent animationType="fade">
          <View style={modaloverlay}>
            <View style={[modalcontent, styles.modalPadding]}>
              <Text style={[h2, mb3, styles.textCenter]}>Selecciona un tema</Text>
              {opcionesTema.map((opcion, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.opcionBtn} 
                  onPress={() => { setTema(opcion); setModalSelector(false); }}>

                  <Text style={[body, tema === opcion && bold]}>{opcion}</Text>
                  {tema === opcion && <Ionicons name="checkmark" size={20} color={theme.colors.black} />}
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.mt20} onPress={() => setModalSelector(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal visible={modalExito || modalError} transparent animationType="fade">
          <View style={modaloverlay}>
            <View style={[modalcontent, styles.modalPadding, bs.aiCenter]}>
              <Ionicons 
                name={modalExito ? "paper-plane-outline" : "alert-circle-outline"} 
                size={60} color={theme.colors.black} style={mb2}/>

              <Text style={[h2, mb1, styles.textCenter]}>
                {modalExito ? "Enviado con éxito" : "Faltan datos"}
              </Text>

              <Text style={[body, styles.textCenter, mb3]}>
                {modalExito ? "Te contactaremos pronto." : "Selecciona un tema y escribe un mensaje."}
              </Text>

              <TouchableOpacity 
                style={[btnprimary, styles.w100]} 
                onPress={() => { modalExito ? navigation.goBack() : setModalError(false); setModalExito(false); }}>
                  
                <Text style={btnprimarytext}>{modalExito ? "Genial" : "Entendido"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: { 
    marginTop: 60, 
    marginBottom: 40 
  },
  ml15: { 
    marginLeft: 15 
  },
  selector: { 
    backgroundColor: theme.colors.lightgray, 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  selectorText: { 
    fontSize: 16, 
    color: theme.colors.black 
  },
  placeholder: { 
    color: theme.colors.mediumgray 
  },
  textArea: { 
    backgroundColor: theme.colors.lightgray, 
    padding: 15, 
    borderRadius: 12, 
    height: 120, 
    textAlignVertical: 'top', 
    fontSize: 16, 
    marginBottom: 20 
  },
  mt10: { 
    marginTop: 10 
  },
  mt20: { 
    marginTop: 20 
  },
  modalPadding: { 
    padding: 30 
  },
  textCenter: { 
    textAlign: 'center' 
  },
  opcionBtn: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: theme.colors.border 
  },
  cancelText: { 
    color: theme.colors.mediumgray, 
    fontWeight: 'bold' 
  },
  w100: { 
    width: '100%' 
  }
});

export default Ayuda;