import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView as WB} from 'react-native-webview';

const WebView = ({route, navigation}) => {
  const {urlName} = route.params;
  return <WB source={{uri: urlName}} style={styles.view} />;
};

export default WebView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
