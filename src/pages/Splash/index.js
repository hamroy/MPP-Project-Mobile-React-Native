import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

import {images} from '../../constants';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  });

  return (
    <View style={styles.background}>
      <Image source={images.logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
  },
});
