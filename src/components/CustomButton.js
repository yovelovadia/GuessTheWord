import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, textStyles } from '@styles';

const CustomButton = ({ text, onPress, disabled, style }) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.container(disabled), style]}
    onPress={onPress}
  >
    <Text style={textStyles.normalTextBlack}>{text}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  container: (disabled) => ({
    opacity: disabled ? 0.6 : 1,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightRed,
  }),
});
