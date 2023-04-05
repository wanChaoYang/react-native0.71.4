import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styleSheet = (): JSX.Element => {
  return (
    <View>
      <Text style={{fontSize: 30}}> Hello World </Text>
      <Text style={[{fontSize: 30}, {color: 'red'}]}> Hello World </Text>
      <Text style={[styles.h1]}> Hello World </Text>
      <Text style={styles.h2}> Hello World </Text>
    </View>
  );
};
export default styleSheet;
const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
