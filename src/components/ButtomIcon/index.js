import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';

const ButtomIcon = ({title}) => {
  const Icon = () => {
    // if (title === 'layanan1') {
    //   return <Image source={icons.bill} />;
    // }
    // if (title === 'layanan2') {
    //   return <Image source={icons.phone} />;
    // }
    return <Image source={icons.more} style={styles.img} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
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
    backgroundColor: COLORS.green,
    padding: 20,
    borderRadius: 10,
  },
  container: {
    marginBottom: 20,
    marginRight: 40,
  },
  text: {
    fontSize: SIZES.font,
    fontFamily: 'TitilliumWeb-Reguler',
    textAlign: 'center',
  },
});
