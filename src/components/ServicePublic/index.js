import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';
import {COLORS, SIZES, icons} from '../../constants';
import ButtomIcon from '../ButtomIcon';
import MarqueeText from 'react-native-marquee';

const ServicePublic = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [runText, setrunText] = useState([]);

  const getServices = async () => {
    try {
      const response = await fetch(
        'https://mpp.natunakab.go.id/admin/menu-json',
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getText = async () => {
    try {
      const response = await fetch(
        'https://mpp.natunakab.go.id/admin/teks-json',
      );
      const json = await response.json();
      setrunText(json);
      // console.log(runText[0].teks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServices();
    getText();
  }, []);

  const Item = ({item}) => (
    <ButtomIcon
      title={item.keterangan}
      iconName={item.gambar}
      urlName={item.url}
    />
  );

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
          {runText.length > 0 ? runText[0].teks : ''}
        </MarqueeText>
      </View>
      <Text style={styles.label}>Layanan Kami</Text>
      <View>
        <View style={styles.iconLayanan}>
          {isLoading ? (
            <ActivityIndicator style={styles.indicator} />
          ) : (
            data.map((service, key) => {
              return <Item key={key} item={service} />;
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
  indicator: {
    padding: 20,
  },
});
