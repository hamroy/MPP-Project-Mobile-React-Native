import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import {COLORS, SIZES, images} from '../../constants';
const data = [
  {
    id: 1,
    img: 'https://mpp.natunakab.go.id/admin/uploads/Icon_Logo_MPP1.png',
  },
  {
    id: 2,
    img: 'https://mpp.natunakab.go.id//admin//uploads//Icon_Logo_MPP1.png',
  },
];

const SlideItem = ({item}) => {
  return (
    <View style={styles.bannerItem}>
      <Image
        // source={{
        //   uri: item.img,
        // }}
        source={images.logo_fs}
        resizeMode="contain"
        style={styles.img}
      />
    </View>
  );
};

const Banners = () => {
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
    height: SIZES.height * 0.2,
  },
  banner: {
    marginVertical: 10,
  },
  bannerItem: {
    backgroundColor: COLORS.white,
    marginEnd: 10,
    flex: 1,
    alignItems: 'baseline',

    height: SIZES.height * 0.2,
  },
});

export default Banners;
