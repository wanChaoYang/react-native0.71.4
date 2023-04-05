import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
function Index() {
  const [value, setValue] = useState('');
  const [pwd, setPwd] = useState('');
  const onChangeText = (v: string) => {
    setValue(v);
  };
  return (
    <View style={[styles.container]}>
      <Text>TextInput</Text>
      <TextInput
        style={styles.input}
        placeholder="请输入用户名"
        onChangeText={onChangeText}
        value={value}
      />
      <TextInput
        style={styles.input}
        placeholder="请输入密码"
        onChangeText={v => {
          setPwd(v);
        }}
        value={pwd}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="请输入手机号"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.textarea}
        placeholder="请输入自我介绍"
        multiline={true}
        numberOfLines={5}
        textAlignVertical="top"
      />
      <Button
        onPress={() => {
          Alert.alert(value);
        }}
        title="确认"
        color="#841584"
      />
    </View>
  );
}
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width - 40,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  textarea: {
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width - 40,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
});
