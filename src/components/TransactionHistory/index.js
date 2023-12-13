import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';

const ButtomTrans = ({title, desc}) => {
  const Icon = () => {
    return <Image source={icons.bill} style={styles.img} />;
  };
  return (
    <TouchableOpacity style={styles.riwayat}>
      <View style={styles.button}>
        <Icon />
        <View>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.text}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TransactionHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Riwayat Transaksi</Text>
      <ButtomTrans title={'bayar lisrik dua'} desc={'proses'} />
      <ButtomTrans title={'bayar lisrik'} desc={'dibayar'} />
      <ButtomTrans title={'bayar lisrik tiga'} desc={'dibayar'} />
    </View>
  );
};

export default TransactionHistory;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  riwayat: {
    backgroundColor: COLORS.white,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
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
    fontFamily: 'Roboto-Bold',
    color: COLORS.black,
  },
  textTitle: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  },
  text: {
    fontSize: SIZES.font,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  img: {
    margin: 10,
  },
});
