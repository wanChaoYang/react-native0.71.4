/**
 * 调用摄像头
 * 安装
 * yarn add react-native-image-picker
 * 
 * 
 * 配置

 * https://github.com/react-native-image-picker/react-native-image-picker
 * 和摄像头的配置是一样的
 *  * 在android/app/src/main/AndroidManifest.xml文件中
 * <!-- Required -->
 * <uses-permission android:name="android.permission.CAMERA" />
 * <!-- Include this only if you are planning to use the camera roll -->
 * <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
 * <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
 * <!-- Include this only if you are planning to use the microphone for video recording -->
 * <uses-permission android:name="android.permission.RECORD_AUDIO"/>
 * 
 * 文件android/app/build.gradle中配置
 * android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' // <--- insert this line
  }
* IOS
 * RCT_NEW_ARCH_ENABLED=1 npx pod-install ios
}
 * 使用
 * 1.调用摄像头
 * 2.访问相册
 * 
 */

import React, {useEffect, useState} from 'react';
import {Alert, Text, StyleSheet, View, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Index = () => {
  const [state, setState] = useState({
    avatar: 'https://reactnative.dev/img/tiny_logo.png',
  });

  const changeVideo = async () => {
    const options = {
      mediaType: 'video', //photo 拍照 、video录像
    };
    const result = await launchCamera(options as any);
    Alert.alert('成功', JSON.stringify(result));
    console.log(result);
  };
  const changePhoto = async () => {
    const options = {
      mediaType: 'photo', //photo 拍照 、video录像
    };
    const result = await launchCamera(options as any);
    Alert.alert('成功', JSON.stringify(result));
    const assets = result.assets || [];
    const uri: string = assets[0].uri || '';
    setState({avatar: uri});
  };
  const changeImgs = async () => {
    const options = {
      mediaType: 'photo', //photo 拍照 、video录像 安卓不支持混合 mixed
    };
    const result = await launchImageLibrary(options as any);
    Alert.alert(JSON.stringify(result));
  };

  return (
    <View style={styles.container}>
      <Button title="录像" onPress={changeVideo} />
      <Button title="拍照" onPress={changePhoto} />
      <Button title="选择照片" onPress={changeImgs} />
      <View style={styles.avatar}>
        <Image style={[styles.avatar]} source={{uri: state.avatar}} />
      </View>
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
  },
});
