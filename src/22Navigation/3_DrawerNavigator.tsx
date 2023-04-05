/**
 * 安装
 * yarn add @react-navigation/drawer
 * 使用
 * import { createDrawerNavigator } from '@react-navigation/drawer';
 * const Drawer = createDrawerNavigator();
 * 
 * 
 * function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}            
 * 
 * 属性
 * screenOptions
 *   drawerPosition 菜单显示位置 left默认 | right
 *   drawerType ：菜单动画效果 front| back| slide |permanent一直存在
 *   drawerStyle：菜单样式
 *   drawerContentOptions：选中菜单样式
 *   activeTintColor:当前选中菜单样式
 *   itemStyle:所有菜单样式
 * screen
 *  otions
 *   title：可以是页面标题
 *   headerStyle：标题样式
 *   headerLeft：左侧样式
 *   headerRight：右侧样式
 * 新版本RN使用时注意需要在babel.config.js中添加
 * plugins: ['react-native-reanimated/plugin']可以解决报错问题
 */

import React from 'react';
import {Button, Text, View, Alert} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
function HomeScreen(prop: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title="Toggle Drawer"
        onPress={() => prop.navigation.toggleDrawer()}
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
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 180,
        },
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerActiveTintColor: 'red',
        drawerItemStyle: {
          //设置菜单项的样式
          marginVertical: 20,
        },
      }}>
      <Drawer.Screen
        options={{
          title: '首页',
          drawerIcon: ({focused, color}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          title: '新闻',
          drawerIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              color={color}
            />
          ),
        }}
        name="News"
        component={NewsScreen}
      />
    </Drawer.Navigator>
  );
};
export default Index;
