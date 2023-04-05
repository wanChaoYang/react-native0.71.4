/**
 * 安装
 * yarn add @react-navigation/stack
 * 使用
 * import { createStackNavigator } from '@react-navigation/stack';
 * const Stack = createStackNavigator();
 * 
 *   function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}             
 * 
 * 属性
 * screenOptions
 *   initialRouteName
 *   初始化路由,即默认加载路由
 *   headerMode
 *     float:ios头部效果
 *     screen:Android头部效果
 *     none:不显示头部
 * screen
 *  otions
 *   title：可以是页面标题
 *   headerStyle：标题样式
 *   headerLeft：左侧样式
 *   headerRight：右侧样式
 * 
 */

import React from 'react';
import {Button, Text, View, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

function HomeScreen(prop: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="跳到新闻页面"
        onPress={() => prop.navigation.navigate('News')}
      />
    </View>
  );
}
function NewsScreen(prop: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>News Screen</Text>
      <Button
        title="跳到 Home 页面"
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();
const Index = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                Alert.alert('hello');
              }}>
              <Text>hello</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
};
export default Index;
