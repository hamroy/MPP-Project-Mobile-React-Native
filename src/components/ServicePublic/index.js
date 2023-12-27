import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';
import ButtomIcon from '../ButtomIcon';
import MarqueeText from 'react-native-marquee';

const ServicePublic = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://mpp.natunakab.go.id/menu-json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgInfo}>
        <Image source={icons.info} />
        <MarqueeText
          style={styles.marquee}
          speed={0.5}
          loop={true}
          marqueeOnStart={true}
          delay={1000}>
          Lorem Ipsum is simply dummy text of the printing
        </MarqueeText>
      </View>
      <Text style={styles.label}>Layanan Kami</Text>
      <View>
        <View style={styles.iconLayanan}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map(service => {
              return (
                <ButtomIcon
                  title={service.keterangan}
                  iconName={service.gambar}
                  urlName={service.url}
                />
              );
            })
          )}
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
    // justifyContent: 'space-between',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  imgInfo: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    paddingRight: 3,
    // alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.gray,
  },
  marquee: {
    fontSize: SIZES.h4,
    color: COLORS.lightBrown,
  },
});
