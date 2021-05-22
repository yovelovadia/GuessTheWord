import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, textStyles } from '@styles';

const colorsList = [colors.gold, colors.silver, colors.bronze];

const LeaderBoardRow = ({ name, phone, score, index }) => (
  <View style={styles.container(index)}>
    <View>
      <Text style={textStyles.normalTextWhite}>Name: {name}</Text>
      <Text style={textStyles.normalTextWhite}>phone: {phone}</Text>
    </View>
    <Text style={textStyles.normalTextWhite}>score: {score}</Text>
  </View>
);

export default LeaderBoardRow;

const styles = StyleSheet.create({
  container: (index) => ({
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    borderColor: colors.white,
    backgroundColor: colorsList[index],
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
});
