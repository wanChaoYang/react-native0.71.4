/**
 * 1.TouchableHighlight
 * 触碰后显示高亮
 * 2.TouchableOpacity
 * 触碰后透明度降低(模糊显示)
 * 3.TouchableWithoutFeedback
 * 触碰后无任何响应
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
function Index() {
  const onPress = () => {
    console.log('点我');
  };
  return (
    <View style={[styles.container]}>
      <Text>Touchable</Text>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>点击这里</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text>点击这里</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 10,
    marginVertical:15
  },
});
