import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import ButtomIcon from '../ButtomIcon';

const ServicePublic = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Layanan Kami</Text>
      <View style={styles.iconLayanan}>
        <ButtomIcon title={'layanan1'} />
        <ButtomIcon title={'layanan2'} />
        <ButtomIcon title={'layanan3'} />
        <ButtomIcon title={'layanan4'} />
        <ButtomIcon title={'layanan4'} />
        <ButtomIcon title={'layanan4'} />
      </View>
    </View>
  );
};

export default ServicePublic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingLeft: 40,
    paddingTop: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  label: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    fontFamily: 'TitilliumWeb-Reguler',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
