/**
 * 轮播组件
 * 安装
 * yarn add @react-native-async-storage/async-storage
 * 配置
 * https://github.com/react-native-async-storage/async-storage
 * 配置比较麻烦需要注意
 * 即使RN大于6.0有时自动链接也不行，需要手动链接
 *
 * 使用
 * 增删改查
 *
 *
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './storage';

const Index = () => {
  const [storeValue, setStoreValue] = useState({
    name: '',
    age: '',
  });
  const setAsyncStore = async () => {
    const jsonValue = {
      name: '刘德华',
      age: '50',
    };
    try {
      await AsyncStorage.setItem('VLUE_KEY', JSON.stringify(jsonValue));
    } catch (e) {
      console.log(e);
    }
  };
  const getAsyncStore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('VLUE_KEY');
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue);
        setStoreValue(value);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const clearAsyncStore = () => {
    Storage.clear;
  };
  return (
    <ScrollView>
      <View>
        <Button title="存储" onPress={setAsyncStore} />
        <Button title="获取" onPress={getAsyncStore} />
        <Button title="清空" onPress={clearAsyncStore} />
        <View>
          <Text style={{color: '#000'}}>姓名:{storeValue.name}</Text>
          <Text style={{color: '#000'}}>年龄:{storeValue.age}</Text>
        </View>
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
