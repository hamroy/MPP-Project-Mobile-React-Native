import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {images, SIZES, FONTS, COLORS, icons} from '../../constants';
import {ServicePublic, TransactionHistory} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={images.bg1} style={styles.header}>
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang</Text>
            <Text style={styles.username}>Mall</Text>
            <Text style={styles.username}>Pelayanan</Text>
            <Text style={styles.username}>Publik</Text>
          </View>
        </ImageBackground>
        <ServicePublic />
        <TransactionHistory />
      </ScrollView>
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
    height: SIZES.height * 0.4,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  logo: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.1,
    resizeMode: 'contain',
  },
  hello: {
    marginTop: SIZES.height * 0.05,
  },
  selamat: FONTS.h2,
  username: FONTS.h1,
});
