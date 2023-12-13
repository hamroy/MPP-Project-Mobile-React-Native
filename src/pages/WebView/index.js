import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WebView = ({route, navigation}) => {
  const {url} = route.params;
  return (
    <View>
      <Text>WebView</Text>
    </View>
  );
};

export default WebView;

const styles = StyleSheet.create({});
