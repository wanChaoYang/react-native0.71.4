import React, {PureComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import router from './router/index';
const Home = (prop: any) => {
  const onPress = (item: any) => {
    prop.navigation.navigate(item.name);
  };
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={router}
          renderItem={val => {
            const {item} = val;
            return (
              <TouchableOpacity onPress={onPress.bind(null, item)}>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={() => {
            return <Text>没有更多了</Text>;
          }}
        />
      </SafeAreaView>
    </View>
  );
};
export default Home;
