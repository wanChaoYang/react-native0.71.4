//可以进行分组的列表
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
} from 'react-native';

const DATA = [
  {
    title: '魏国',
    data: ['曹操', '司马懿', '张辽'],
  },
  {
    title: '蜀国',
    data: ['刘备', '关于', '张飞'],
  },
  {
    title: '吴国',
    data: ['孙权', '周瑜', '小乔'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = (val: any) => {
  const {title} = val;
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  const onRefresh = () => {
    Alert.alert('下拉刷新');
  };
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ItemSeparatorComponent={() => {
          //列表之间插入的组件
          return <View style={{borderColor: 'red', borderWidth: 1}}></View>;
        }}
        ListEmptyComponent={() => {
          //列表数据为空时展示的组件
          return <Text style={{fontSize: 30}}>暂无数据</Text>;
        }}
        //下拉刷新
        refreshing={false}
        onRefresh={onRefresh}
        //上拉触底列表还剩10%就执行上拉刷新
        onEndReachedThreshold={0.1}
        //上拉刷新
        onEndReached={() => {
          Alert.alert('到底了');
        }}
        ListHeaderComponent={() => {
          return <Text style={{fontSize: 40}}>三国英雄榜</Text>;
        }}
        ListFooterComponent={() => {
          return <Text>没有更多了</Text>;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
