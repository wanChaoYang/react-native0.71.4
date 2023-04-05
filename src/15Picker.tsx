/**
 * 第三方组件的使用
 * 安装 yarn add @react-native-picker/picker
 * 配置 https://github.com/react-native-picker/picker
 *
 * 使用
 * 注意平台之间的差异
 * ios
 * 需要cd到哦ios文件下安装 pod install
 * android
 * 不需要操作
 * rn小于0.6的配置比较多
 */

import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};
export default Index;
