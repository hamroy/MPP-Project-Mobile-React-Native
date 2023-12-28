import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';

import {useNavigation} from '@react-navigation/native';

const ButtomIcon = ({title, iconName, urlName}) => {
  const navigation = useNavigation();
  const Icon = () => {
    return <Image source={{uri: iconName}} style={styles.img} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('WebView', {
          urlName: urlName,
        })
      }>
      <View style={styles.button}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtomIcon;
const styles = StyleSheet.create({
  button: {
    padding: 5,
    // backgroundColor: COLORS.brown,
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    // backgroundColor: COLORS.brown,
    width: SIZES.width * 0.2,
    height: SIZES.height * 0.2,
    textAlign: 'center',
    marginBottom: 30,
    justifyContent: 'center',
    // marginRight: 20,
  },
  text: {
    padding: SIZES.width * 0.005,
    fontSize: SIZES.h4,
    fontFamily: 'Roboto-Reguler',
    textAlign: 'center',
  },
  img: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.1,
    // backgroundColor: COLORS.black,
    resizeMode: 'contain',
  },
});
