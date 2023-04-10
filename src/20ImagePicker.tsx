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
}
 * 使用
 * 1.调用摄像头
 * 2.访问相册
 * 
 */

import React from 'react';
import {Alert, Text, StyleSheet, View} from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>888</Text>
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
