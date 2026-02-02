import React from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme, bs } from '../../theme';
import RegisterForm from '../components/RegisterForm'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = ({ navigation }) => {
  const { container, paddingapp, h1, body, mb4, mt1 } = bs;

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex1}>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
            
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={26} color={theme.colors.black} />
          </TouchableOpacity>

          <View style={mb4}>
            <Text style={[h1, styles.h1Size]}>Regístrate</Text>
            <Text style={[body, mt1]}>Solo te tomará un par de minutos 🙂</Text>
          </View>

          <RegisterForm onBackToLogin={() => navigation.navigate('Welcome')} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: { 
    flex: 1 
  },
  scrollContent: { 
    paddingHorizontal: 25, 
    paddingTop: 20, 
    paddingBottom: 40 
  },
  backBtn: {
    marginBottom: 20
  },
  h1Size: { 
    fontSize: 32 
  }
});

export default Register;