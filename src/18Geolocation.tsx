/**
 * 获取经纬度
 * 安装
 * yarn add @react-native-community/geolocation
 * 配置
 * https://github.com/react-native-geolocation/react-native-geolocation
 * 添加获取定位信息的授权许可
 * 如果RN小于0.59 通过以下方式链接地址
 * react-native link @react-native-community/geolocation
 * 安卓：
 * 找到这个文件\android\app\src\mainAndroidManifest.xml
 * 将以下代码粘贴进去
 * <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
 * or
 * <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
 * iOS：
 *
 *
 * 使用
 * 通过手机，获取经纬度信息
 * import Geolocation from '@react-native-community/geolocation';
 * Geolocation.getCurrentPosition(info => console.log(info));
 *
 */

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const Index = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info =>{
        console.log(info)
        Alert.alert("成功",JSON.stringify(info))
      },
      error => {
        Alert.alert('报错', JSON.stringify(error))
      },
      {
        timeout: 20000, //允许超时20秒
      },
    );
  }, []);
  return (
    <ScrollView>
      <View>
        <Text>通过手机，获取经纬度信息</Text>
      </View>
    </ScrollView>
  );
};
export default Index;
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
