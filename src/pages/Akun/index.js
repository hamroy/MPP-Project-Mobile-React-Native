import {StyleSheet, Button, Image, View} from 'react-native';
import {images} from '../../constants';
import React from 'react';

const Akun = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <Button
        title="Daftar"
        onPress={() =>
          navigation.navigate('WebView', {
            urlName: 'https://mpp.natunakab.go.id/admin/',
          })
        }
      />
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
