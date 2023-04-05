/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {Text, View} from 'react-native';
// import StyleSheet from './src/01StyleSheet';
// import FlexBox from './src/02FlexBox';
// import Dimensions from "./src/03Dimensions"
// import Bottom from "./src/04Bottom_Alert"
// import SwitchAndStatubar from "./src/05Switch_Statubar"
// import ActivityIndicator from './src/06ActivityIndicator'
// import Image from './src/07Image'
// import TextInput from './src/08TextInput'
// import Touchable from './src/09Touchable'
// import ScrollView from './src/10ScrollView'
// import SectionList from './src/11SectionList'
// import FlatList from './src/12FlatList'
// import Animated from './src/13Animated'
// import WebViewUri from './src/14WebView/WebViewUri';
import WebViewHtml from './src/14WebView/WebViewHtml';
// import Picker from "./src/15Picker"
// import Navigation from './src/22Navigation/1_StackNavigator';
// import BottomTab from './src/22Navigation/2_BottomTab';
// import DrawerNavigator from './src/22Navigation/3_DrawerNavigator';
// import MaterialTopTabNavigator from './src/22Navigation/4_MaterialTopTabNavigator';
// import NestingNavigation from './src/23NestingNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <WebViewHtml />
    </NavigationContainer>
  );
}

export default App;
