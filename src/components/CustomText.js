// components/CustomText.js
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

export default function Text({ style, children, ...props }) {
  return (
    <RNText style={[styles.defaultText, style]} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'DMSans_400Regular',
  },
});