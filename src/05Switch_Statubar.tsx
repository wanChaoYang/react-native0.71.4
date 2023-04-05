import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar, Switch} from 'react-native';

export default function SwitchAndStatubar() {
  const [hideStatuBar, setHideStatuBar] = useState(false);
  const onValueChange = () => {
    setHideStatuBar(v => !v);
  };
  return (
    <View style={[styles.container]}>
      <StatusBar
        hidden={false}
        backgroundColor="red" //仅在 Android 应用有效
        barStyle={'light-content'}
      />
      <Switch
        trackColor={{false: 'red', true: 'blue'}}
        thumbColor={'green'}
        value={hideStatuBar}
        onValueChange={onValueChange}
      />
      <Text>Switch && StatuBar</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
