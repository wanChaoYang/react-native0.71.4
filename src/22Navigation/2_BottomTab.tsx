/**
 * 安装
 * yarn add @react-navigation/bottom-tabs
 * 使用
 * import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * const Tab = createBottomTabNavigator();
 function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}             
 * 
 * 属性
 * screenOptions
 *  initialRouteName
 *  初始化路由,即默认加载路由
 *  headerMode
 *   float:ios头部效果
 *   screen:Android头部效果
 *   none:不显示头部 
 * scree
 *  otions
 *   title：可以是页面标题
 *   headerStyle：标题样式
 *   headerLeft：左侧样式
 *   headerRight：右侧样式
 * 
 * 
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" //默认选中
      screenOptions={{
        tabBarActiveTintColor: '#e91e63', //选中的颜色
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: '新闻',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Index;
