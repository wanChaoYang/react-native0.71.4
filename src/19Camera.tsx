/**
 * 调用摄像头
 * 安装
 * RN大于等于0.60
 * 安卓
 * npm install react-native-camera --save
 * IOS
 * Run cd ios && pod install && cd ..
 * 
 * 小于0.60
 * npm install react-native-camera --save
 * react-native link react-native-camera
 * 
 * 
 * 
 * 配置
 * https://github.com/react-native-camera/react-native-camera
 * 添加使用摄像头许可证
 * 使用
 * 拍照、扫码、人脸识别...
 * 
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
 *
 */

import React, {useRef} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Index = () => {
  const camera: any = useRef(null);
  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      // console.log(data.uri);
      Alert.alert(data.uri)
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14}}> 拍照 </Text>
        </TouchableOpacity>
      </View>
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
