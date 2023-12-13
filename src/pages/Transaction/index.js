import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Transaction = ({navigation}) => {
  return (
    <View>
      <Text>Transaction</Text>
      <Button title="Kembali" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
