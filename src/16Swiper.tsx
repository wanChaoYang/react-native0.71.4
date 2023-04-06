/**
 * 轮播组件
 * 安装
 * yarn add react-native-swiper
 * 使用
 * https://github.com/leecade/react-native-swiper
 *
 *
 */

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
const Index = () => {
  return (
    <ScrollView>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        height={200}>
        <View style={[styles.slide1, styles.slide]}>
          <Text style={[styles.text, styles.slide]}>Hello Swiper</Text>
        </View>
        <View style={[styles.slide2, styles.slide]}>
          <Text style={[styles.text, styles.slide]}>Beautiful</Text>
        </View>
        <View style={[styles.slide3, styles.slide]}>
          <Text style={[styles.text, styles.slide]}>And simple</Text>
        </View>
      </Swiper>
      <Swiper
        style={styles.wrapper}
        loop={true}
        horizontal={false}
        height={200}>
        <View style={[styles.slide1, styles.slide]}>
          <Text style={[styles.text, styles.slide]}>Hello Swiper</Text>
        </View>
        <View style={[styles.slide2, styles.slide]}>
          <Text style={[styles.text, styles.slide]}>Beautiful</Text>
        </View>
        <View style={[styles.slide3, styles.slide]}>
          <Text style={[styles.text, styles.slide]}>And simple</Text>
        </View>
      </Swiper>
    </ScrollView>
  );
};
export default Index;
const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide: {
    height: 300,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
