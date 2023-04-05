//响应式布局
import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
const DimensionsView = (): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.itemBase]}>
        <Text> 扫一扫</Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text> 付款码</Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text> 卡包</Text>
      </View>
      <View style={[styles.itemBase]}>
        <Text> 出行</Text>
      </View>
    </View>
  );
};
export default DimensionsView;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', //换行
    // flexWrap:'wrap-reverse',//从上面换行
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a',
    width: Dimensions.get('window').width / 3,
    height: 90,
    borderWidth: 1,
    borderColor: '#000',
  },
});
