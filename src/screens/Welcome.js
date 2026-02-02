import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { theme, bs } from '../../theme';
import LoginForm from '../components/LoginForm';

const Welcome = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { container } = bs;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={container}>

      <ImageBackground
        source={require('../../assets/mujer-en-cicla.jpg')}
        style={styles.headerBackground}
        resizeMode="cover">

        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.formFlex}>
        {isLogin ? (
          <LoginForm onGoToRegister={() => setIsLogin(false)}/>
          ):(
          <View /> 
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    flex: 0.35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  formFlex: {
    flex: 0.65,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -45,
    paddingTop: 45,
    paddingHorizontal: 40,
    paddingBottom: 40,
    elevation: 25,
    shadowColor: "#000",
    shadowOffset: { 
      width: 0, 
      height: -10 
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
});

export default Welcome;