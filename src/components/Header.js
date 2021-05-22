import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import routes from '@routes';
import images from '@images';
import { textStyles } from '@styles';

const Header = ({ scene, navigation }) => {
  const { goBack } = navigation;
  const { name } = scene.route;
  const screen = routes[name];
  const { headerName, hasGoBack } = screen;

  return (
    <View style={styles.container}>
      {hasGoBack && (
        <TouchableOpacity style={styles.goBack} onPress={goBack}>
          <Image style={styles.goBackImage} source={images.backButton} />
        </TouchableOpacity>
      )}
      <Text style={textStyles.bigTextWhite}>{headerName}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: { position: 'absolute', left: 20 },
  goBackImage: { resizeMode: 'contain', width: 40 },
});
