import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles } from '@styles';

const WordToGuess = ({ randomWordsBlanked }) => (
  <View style={styles.container}>
    {randomWordsBlanked.map((letter, index) => (
      <View
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        style={styles.letterContainer}
      >
        <Text style={textStyles.bigTextWhite}>{letter}</Text>
      </View>
    ))}
  </View>
);

export default WordToGuess;

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  letterContainer: {
    alignItems: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 3,
    width: 25,
    margin: 5,
  },
});
