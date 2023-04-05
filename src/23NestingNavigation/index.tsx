/**
 * 嵌套路由的使用以及路由传参
 */

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
export default Index;

function FeedScreen(prop: any) {
  const toProfile = () => {
    prop.navigation.navigate('Profile', {id: '123'});
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Fee Screen</Text>
      <Button title="跳到 Profile 页面" onPress={toProfile} />
    </View>
  );
}
function MessagesScreen(prop: any) {
  const toSettings = () => {
    prop.navigation.navigate('Settings', {key: '888', name: '刘德华'});
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Messages Screen</Text>
      <Button title="跳到 Settings 页面" onPress={toSettings} />
    </View>
  );
}
function ProfileScreen(prop: any) {
  const id: string = prop.route.params.id;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Text>ID:{id}</Text>
    </View>
  );
}

function SettingsScreen(prop: any) {
  const key: string = prop.route.params.key;
  const name: string = prop.route.params.name;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Text>key :{key}</Text>
      <Text>name :{name}</Text>
    </View>
  );
}
