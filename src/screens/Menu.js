import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomButton, PageContainer, HighestScore } from '@components';
import routes from '@routes';
import images from '@images';

const Menu = ({ navigation }) => {
  const [highestScorePlayer, setHighestScorePlayer] = useState(null);
  const { allScores } = useSelector((state) => state.game);
  const { navigate } = navigation;

  useEffect(() => {
    const getHighestScore = () => {
      const player = allScores.reduce((max, current) =>
        max.score >= current.score ? max : current
      );
      setHighestScorePlayer(player);
    };

    if (allScores.length) getHighestScore();
  }, [allScores]);

  return (
    <PageContainer style={styles.container} alignCenter>
      <Image style={styles.logo} source={images.logo} />
      {highestScorePlayer && <HighestScore {...highestScorePlayer} />}
      <View style={styles.buttonsContainer}>
        <CustomButton text="game" onPress={() => navigate(routes.game.name)} />
        <CustomButton
          text="LeaderBoards"
          onPress={() => navigate(routes.leaderBoards.name)}
        />
      </View>
    </PageContainer>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: { justifyContent: 'space-around' },
  buttonsContainer: { width: '60%' },
  logo: { resizeMode: 'contain', width: '100%' },
});
