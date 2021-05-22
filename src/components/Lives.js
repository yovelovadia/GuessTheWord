import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import images from '@images';

const Lives = ({ lives }) => (
  <View style={styles.container}>
    {lives > 0 &&
      Array(lives)
        .fill()
        .map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Image key={index} style={styles.heart} source={images.heart} />
        ))}
  </View>
);

export default Lives;

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  heart: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
