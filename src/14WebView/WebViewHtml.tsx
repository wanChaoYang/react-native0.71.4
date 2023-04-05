/**
 * 第三方组件的使用
 * 安装 yarn add react-native-webview
 * 配置 https://github.com/react-native-webview/react-native-webview
 * WebView 相当于内置浏览器
 * 使用
 * 1.直接制定uri地址
 * 2.直接渲染html代码
 * ios
 * 需要cd到哦ios文件下安装 pod install
 * android
 * 需要确保android/gradle.properties是打开的，需要有以下两行代码
 * android.useAndroidX=true
 * android.enableJetifier=true
 */

import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
const Index = () => {
  return (
    <WebView
    originWhitelist={['*']}
    source={{ html: '<h1>Hello world</h1>' }}
  />
  );
};
export default Index;
