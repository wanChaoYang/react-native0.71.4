//1.加载本地图片
//2.加载网路图片
//3.加载base64
import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

function Index() {
  return (
    <View style={[styles.container]}>
      <Text>Image</Text>
      <Image style={[styles.itemImg]} source={require('./imgs/3.jpg')} />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
}
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImg: {
    height: 300,
    width: Dimensions.get('window').width,
    marginVertical: 20, //外边距
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginVertical:20
  },
  logo: {
    width: 66,
    height: 58,
    marginVertical:20
  },
});
