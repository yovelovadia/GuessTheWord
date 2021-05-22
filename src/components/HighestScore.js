import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import images from '@images';
import { textStyles } from '@styles';

const HighestScore = ({ name, phone, score }) => (
  <View style={styles.container}>
    <Image style={styles.trophy} source={images.trophy} />
    <Text style={textStyles.normalTextWhite}>name: {name}</Text>
    <Text style={textStyles.normalTextWhite}>phone: {phone}</Text>
    <Text style={textStyles.normalTextWhite}>score: {score}</Text>
  </View>
);

export default HighestScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  trophy: { resizeMode: 'contain', width: 70, height: 70 },
});
