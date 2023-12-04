import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {images, SIZES, FONTS, COLORS} from '../../constants';

import {ServicePublic} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={images.bg1} style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang</Text>
          <Text style={styles.username}>ilham asda sadasd</Text>
        </View>
      </ImageBackground>
      <ServicePublic />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.lightpurple,
  },
  header: {
    width: SIZES.width,
    height: SIZES.height * 0.35,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  logo: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.1,
  },
  hello: {
    marginTop: SIZES.height * 0.005,
  },
  selamat: FONTS.h2,
  username: FONTS.h1,
});
