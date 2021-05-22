import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import images from '@images';

const { width, height } = Dimensions.get('screen');

const PageContainer = ({
  children,
  dismissed,
  noPadding,
  alignCenter,
  justifyCenter,
  style,
}) => {
  const styleContainer = {
    flex: 1,
    paddingTop: 80,
    resizeMode: 'cover',
    paddingHorizontal: noPadding ? '0%' : '5%',
    alignItems: alignCenter ? 'center' : 'stretch',
    justifyContent: justifyCenter ? 'center' : 'flex-start',
    ...style,
  };

  return (
    <TouchableWithoutFeedback onPress={dismissed && Keyboard.dismiss}>
      <View style={styleContainer}>
        <Image style={styles.backgroundImage} source={images.background} />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PageContainer;

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
  },
});
