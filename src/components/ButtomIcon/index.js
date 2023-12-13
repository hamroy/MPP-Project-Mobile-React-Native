import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';

import {useNavigation} from '@react-navigation/native';

const ButtomIcon = ({title, iconName, urlName}) => {
  const navigation = useNavigation();
  const Icon = () => {
    return <Image source={iconName} style={styles.img} />;
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
    padding: 20,

    // alignContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
  },
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    // backgroundColor: COLORS.brown,
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.3,
    textAlign: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    // marginRight: 20,
  },
  text: {
    fontSize: SIZES.h4,
    fontFamily: 'Roboto-Reguler',
    textAlign: 'center',
  },
  img: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.2,
    resizeMode: 'contain',
  },
});
