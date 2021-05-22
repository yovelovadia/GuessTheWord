import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors, textStyles } from '@styles';

const CustomInput = ({ label, onChange, value, ...props }) => (
  <View>
    {label && <Text style={textStyles.normalTextWhite}>{label}</Text>}
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        onChangeText={onChange}
        value={value}
        {...props}
      />
    </View>
  </View>
);

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 70,
    borderWidth: 4,
    marginBottom: 15,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  text: { ...textStyles.bigTextWhite, flex: 1 },
});
