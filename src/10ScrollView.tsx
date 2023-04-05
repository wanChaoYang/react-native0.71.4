/**
 *contentContainerStyle属性申明的样式会有继承性
 *showsVerticalScrollIndicator 隐藏滚动条
 *horizontal 水平滚动
 *SafeAreaView 安全区域滚动,如果在刘海屏不会陷入刘海屏底部，ScrollView会
 *
 *注意：ScrollView在安卓底部滚动不完
 *解决：底部给一个View,根据平台判断给这个空View设置高度
 *<View style={{height: Platform.OS === 'ios' ? 0 : 30}}></View>
 *
 *
 */
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
function Index() {
  return (
    <View style={[styles.container]}>
      <Text style={{textAlign: 'center'}}>ScrollView</Text>
      <ScrollView
        style={{backgroundColor: '#dfb'}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.nav}>新闻</Text>
        <Text style={styles.nav}>娱乐</Text>
        <Text style={styles.nav}>体育</Text>
        <Text style={styles.nav}>财经</Text>
        <Text style={styles.nav}>科技</Text>
        <Text style={styles.nav}>军事</Text>
      </ScrollView>
      <ScrollView
        contentContainerStyle={{margin: 30}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={{height: Platform.OS === 'ios' ? 0 : 30}}></View>
      </ScrollView>
    </View>
  );
}
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 42,
  },
  nav: {
    margin: 10,
    height: 50,
    fontSize: 30,
  },
});
