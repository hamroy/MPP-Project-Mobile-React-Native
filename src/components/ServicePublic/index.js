import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS, SIZES, images} from '../../constants';
import ButtomIcon from '../ButtomIcon';

const ServicePublic = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Layanan Kami</Text>
      <View>
        <View style={styles.iconLayanan}>
          <ButtomIcon
            title={'OSS'}
            iconName={images.oss}
            urlName="https://oss.go.id/"
          />
          <ButtomIcon
            title={'Secantik'}
            iconName={images.secantik}
            urlName="https://sicantik.go.id/"
          />
          <ButtomIcon
            title={'BAZNAS Natuna'}
            iconName={images.baznas}
            urlName="https://bayarzakat.baznas.natunakab.go.id"
          />
          <ButtomIcon
            title={'Website Natuna'}
            iconName={images.natuna}
            urlName="https://natunamart.online/"
          />
        </View>
      </View>
    </View>
  );
};

export default ServicePublic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
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
    fontFamily: 'Roboto-Reguler',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
