/**
 * 安装
 * yarn add @react-navigation/material-top-tabs react-native-tab-view
 * 使用
 * import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 * const Tab = createMaterialTopTabNavigator();
 * 
 *function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}            
 * 
 * 属性
 * initialRouteName
 * 初始化路由,即默认加载路由
 * tabBarPosition 'top' | 'bottom'
 * screenOptions
 *  tabBarActiveTintColor
 * screen
 *   otions
 *   title：可以是页面标题
 *   tabBarIcon：标签icon
 *   tabBarLabel：使用了他就不适用title
 * 
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

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

const Index = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14},
        tabBarItemStyle: {
          width: 100,
          borderWidth: 1,
          borderColor: 'red',
        },
        tabBarStyle: {backgroundColor: 'powderblue'},
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#666',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
          tabBarIcon: ({focused, color}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: '新闻',
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Index;
