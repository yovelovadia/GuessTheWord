import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LeaderBoardRow, PageContainer } from '@components';
import { textStyles } from '@styles';

const LeaderBoards = () => {
  const { allScores } = useSelector((state) => state.game);

  return (
    <PageContainer>
      <FlatList
        keyExtractor={({ phone, score }) => `${phone}+${score}`}
        data={allScores}
        renderItem={({ item, index }) => (
          <LeaderBoardRow index={index} {...item} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.noLeaderBoards}>No leaderboards yet!</Text>
        )}
      />
    </PageContainer>
  );
};

export default LeaderBoards;

const styles = StyleSheet.create({
  noLeaderBoards: { ...textStyles.bigTextWhite, textAlign: 'center' },
});
