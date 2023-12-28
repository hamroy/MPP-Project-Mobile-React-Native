import {StyleSheet, Image, View, Button} from 'react-native';
import React from 'react';
import {images} from '../../constants';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <Button title="Kembali" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // width: ,
    marginTop: 100,
    resizeMode: 'contain',
  },
});
