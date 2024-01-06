import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const Banners = () => {
  const [data, setData] = useState([]);
  const [widthBanner, setwidthBanner] = useState(1);

  const getDataBanner = async () => {
    try {
      const response = await fetch(
        'https://mpp.natunakab.go.id/admin/banner-json',
      );
      const json = await response.json();
      setData(json);
      if (json.length > 1) {
        setwidthBanner(0.9);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataBanner();
  }, []);

  const SlideItem = ({item}) => {
    // console.log(widthBanner);
    // const widthBanner = 1;
    return (
      <View style={styles.bannerItem(widthBanner)}>
        <Image
          source={{
            uri: item.gambar,
            cache: 'only-if-cached',
          }}
          // source={images.logo_fs}
          resizeMode="stretch"
          style={styles.img}
        />
      </View>
    );
  };

  return (
    <View style={styles.banner}>
      <FlatList
        data={data}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    // backgroundColor: COLORS.black,
    // width: SIZES.width * 0.9,
    height: SIZES.height * 0.2,
  },
  banner: {
    marginVertical: 10,
  },
  bannerItem: widthBanner => ({
    backgroundColor: COLORS.white,
    marginEnd: 10,
    flex: 1,
    width: SIZES.width * widthBanner,
    height: SIZES.height * 0.2,
  }),
});

export default Banners;
