import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {COLORS, icons, SIZES} from '../../constants';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? (
        <Image source={icons.phone} width={30} />
      ) : (
        <Image source={icons.phone} width={50} />
      );
    }

    if (label === 'Transaksi') {
      return isFocused ? (
        <Image source={icons.bill} width={30} />
      ) : (
        <Image source={icons.bill} width={50} />
      );
    }

    if (label === 'Akun') {
      return isFocused ? (
        <Image source={icons.user} width={30} />
      ) : (
        <Image source={icons.user} width={50} />
      );
    }

    return <Image source={icons.phone} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: SIZES.font,
    marginTop: 5,
    color: isFocused ? COLORS.primary : '#222',
  }),
});
