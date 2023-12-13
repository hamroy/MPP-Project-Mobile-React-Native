import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Transaction = ({navigation}) => {
  return (
    <View>
      <Text>Transaction</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('WebView')}
      />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
