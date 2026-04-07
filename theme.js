import { StyleSheet, Dimensions } from 'react-native';

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    darkgray: '#333333',
    mediumgray: '#666666',
    lightgray: '#f5f5f5',
    border: '#eeeeee',
    overlay: 'rgba(0,0,0,0.85)',
    blue: '#406DFB',
    darkblue: '#2b48a5',
    red: '#DE0B38',
    green: '#30E564'
  }
};

export const bs = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  containerHome: { flex: 1, backgroundColor: '#F6F6F4' },
  row: { flexDirection: 'row', alignItems: 'center' },
  jcbetween: { justifyContent: 'space-between' },
  paddingapp: { paddingHorizontal: 25 },
  center: { justifyContent: 'center', alignItems: 'center' },
  h1: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  h2: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  body: { fontSize: 16, color: '#333' },
  caption: { fontSize: 13, color: '#666' },
  accesorios: { fontSize: 13, color: '#000' },
  bold: { fontWeight: 'bold' },
  mt1: { marginTop: 5 }, 
  mt2: { marginTop: 10 }, 
  mt3: { marginTop: 15 }, 
  mt4: { marginTop: 20 }, mt5: { marginTop: 30 },
  mb1: { marginBottom: 5 }, 
  mb2: { marginBottom: 10 }, 
  mb3: { marginBottom: 15 }, 
  mb4: { marginBottom: 20 }, 
  mb5: { marginBottom: 30 },
  btnprimary: { backgroundColor: '#406DFB', padding: 18, borderRadius: 15, alignItems: 'center' },
  btnprimarytext: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  btnsecondary: { backgroundColor: '#fff', padding: 18, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#cccccc' },
  btnsecondarytext: { color: '#000', fontWeight: 'bold' },
  btnemergency: { color:'#fff', backgroundColor: '#DE0B38', paddingHorizontal: 36, paddingVertical: 20, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#fff' },
  card: { backgroundColor: '#FFF', borderRadius: 20, borderWidth: 1, borderColor: '#eee', overflow: 'hidden' },
  modaloverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center', padding: 25 },
  modalcontent: { width: '100%', backgroundColor: '#FFF', borderRadius: 25, overflow: 'hidden' },
  
});

export default theme;