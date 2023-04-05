//ios里和安卓里是不一样的的
//数字指定大小只在 Android 里生效 ios不生效
//Platform 区分平台(系统)
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';

const Index = () => {
  if (Platform.OS === 'android') {
    Alert.alert('Android');
  } else if (Platform.OS === 'ios') {
    Alert.alert('ios');
  }
  return (
    <View style={[styles.container]}>
      <Text>ActivityIndicator</Text>
      <ActivityIndicator color={'blue'} size="large" />
      <ActivityIndicator color={'blue'} size={'small'} />
      <ActivityIndicator color={'blue'} size={70} />
      <ActivityIndicator color={'blue'} size={100} />
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
