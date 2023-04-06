import React, {PureComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import router from './router/index';
const Home = (prop: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);

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
                <View style={styles.itemList}>
                  <Text
                    style={[
                      styles.itemText,
                      {
                        color: isDarkMode ? Colors.white : Colors.black,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={() => {
            return <Text style={[styles.noMore]}>没有更多了</Text>;
          }}
        />
      </SafeAreaView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  itemList: {
    height: 45,
    borderWidth: 1,
    marginTop: 5,
    borderColor: '#eee',
    paddingHorizontal: 15,
  },
  itemText: {
    height: 45,
    lineHeight: 45,
  },
  noMore: {
    textAlign: 'center',
    fontSize: 12,
    paddingVertical: 5,
  },
});
