//flex布局
import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const FlexBox = (): JSX.Element => {
  return (
    <View>
      <ScrollView>
        <Text style={[Colors.black, styles.h2]}> 主轴方向 </Text>
        <Text style={styles.h3}> flexDirection :"column"(默认) </Text>
        <View style={styles.container}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flexDirection :"column-reverse" </Text>
        <View style={[styles.container, styles.flexCoumnReverse]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flexDirection :"row" </Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flexDirection :"row-reverse" </Text>
        <View style={[styles.container, styles.flexRowReverse]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> justifyContent:'flex-start' </Text>
        <View style={[styles.container, styles.flexRow, styles.flexStart]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> justifyContent:'flex-end' </Text>
        <View style={[styles.container, styles.flexRow, styles.flexEnd]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> justifyContent:"space-around" </Text>
        <View style={[styles.container, styles.flexRow, styles.spaceAround]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> justifyContent:"space-between" </Text>
        <View style={[styles.container, styles.flexRow, styles.spaceBetween]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={[Colors.black, styles.h2]}>交叉轴方向的对齐方式</Text>
        <Text style={styles.h3}> alignItems: 'flex-start' </Text>
        <View style={[styles.container, styles.flexRow, styles.alignStart]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> alignItems: 'flex-end' </Text>
        <View style={[styles.container, styles.flexRow, styles.alignEnd]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> alignItems: 'stretch', </Text>
        <View style={[styles.container, styles.flexRow, styles.alignStretch]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> alignItems: 'baseline', </Text>
        <View style={[styles.container, styles.flexRow, styles.alignBaseline]}>
          <Text style={styles.itemBase}>刘备 </Text>
          <Text style={styles.itemBase}>张飞 </Text>
          <Text style={styles.itemBase}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flex 1:1:1, </Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase, {flex: 1}]}>刘备 </Text>
          <Text style={[styles.itemBase, {flex: 1}]}>张飞 </Text>
          <Text style={[styles.itemBase, {flex: 1}]}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flex 1:2:3, </Text>
        <View style={[styles.container, styles.flexRow]}>
          <Text style={[styles.itemBase, {flex: 1}]}>刘备 </Text>
          <Text style={[styles.itemBase, {flex: 2}]}>张飞 </Text>
          <Text style={[styles.itemBase, {flex: 3}]}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flexCoumn 1:1:1, </Text>
        <View style={[styles.container]}>
          <Text style={[styles.itemBase, {flex: 1}]}>刘备 </Text>
          <Text style={[styles.itemBase, {flex: 1}]}>张飞 </Text>
          <Text style={[styles.itemBase, {flex: 1}]}>关羽 </Text>
        </View>
        <Text style={styles.h3}> flexCoumn 1:3:2, </Text>
        <View style={[styles.container]}>
          <Text style={[styles.itemBase, {flex: 1}]}>刘备 </Text>
          <Text style={[styles.itemBase, {flex: 3}]}>张飞 </Text>
          <Text style={[styles.itemBase, {flex: 2}]}>关羽 </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default FlexBox;
const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 0,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 15, //水平方向的外边距
  },
  h3: {
    fontSize: 24,
    marginHorizontal: 15, //水平方向的外边距
  },
  itemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfd',
    textAlign: 'center',
    padding: 4,
  },
  flexCoumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch', //拉伸
  },
  alignBaseline: {
    alignItems: 'baseline', //基线对齐
  },
});
