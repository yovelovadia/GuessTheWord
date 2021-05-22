import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  CustomButton,
  CustomInput,
  PageContainer,
  WordToGuess,
  Timer,
  Lives,
} from '@components';
import { useGameLogic } from '@hooks';
import { textStyles } from '@styles';

const Game = ({ navigation }) => {
  const { replace } = navigation;
  const {
    randomWordsBlanked,
    level,
    input,
    time,
    lives,
    setInput,
    handleButtonClick,
  } = useGameLogic({ replace });

  return (
    <PageContainer dismissed alignCenter>
      <View style={styles.gameInfoContainer}>
        <View>
          <Timer time={time} />
          <Text style={textStyles.bigTextWhite}>Level: {level}</Text>
        </View>
        <Lives lives={lives} />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.gameInputContainer}>
          <CustomInput value={input} onChange={setInput} />
          <WordToGuess randomWordsBlanked={randomWordsBlanked} />
          <CustomButton text="GO" onPress={handleButtonClick} />
        </View>
      </View>
    </PageContainer>
  );
};

export default Game;

const styles = StyleSheet.create({
  gameInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: { flex: 1, width: '100%', justifyContent: 'center' },
  gameInputContainer: {
    alignItems: 'center',
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
  },
});
