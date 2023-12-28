import {StyleSheet, Image, View} from 'react-native';
import {images} from '../../constants';
import React from 'react';

const Akun = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // width: ,
    resizeMode: 'contain',
  },
});
