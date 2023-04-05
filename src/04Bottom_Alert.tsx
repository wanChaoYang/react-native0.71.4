import React from 'react';
import {View, Button, Alert, StyleSheet} from 'react-native';

export default function Index() {
  const createTwoButton = () => {
    Alert.alert('警告标题', '警告内容', [
      {
        text: '取消',
        onPress: () => {
          console.log('cancel');
        },
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => {
          console.log('确定');
        },
        style: 'default',
      },
    ]);
  };
  const createThreeButton = () => {
    Alert.alert('更新提示', '发现新版本,是否现在更新', [
      {
        text: '稍后再试',
        onPress: () => {
          console.log('destructive');
        },
        style: 'destructive',
      },
      {
        text: '取消',
        onPress: () => {
          console.log('cancel');
        },
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => {
          console.log('确定');
        },
        style: 'default',
      },
    ]);
  };
  return (
    <View>
      <Button title="点我" onPress={() => Alert.alert('我是一个按钮')} />
      <View style={[styles.container]}>
        <Button
          onPress={() => {
            console.log('确认');
          }}
          title="确认"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Button onPress={createTwoButton} title="两个按钮" color="red" />
      <Button onPress={createThreeButton} title="三个按钮" color="blue" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
