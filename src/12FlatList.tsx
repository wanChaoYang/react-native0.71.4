//进行展示的列表不能分组
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
const list = [
  {
    id: '0',
    value: '头条',
  },
  {
    id: '1',
    value: '娱乐',
  },
  {
    id: '2',
    value: '体育',
  },

  {
    id: '3',
    value: '军事',
  },
  {
    id: '4',
    value: '科技',
  },
  {
    id: '5',
    value: '财经',
  },
  {
    id: '6',
    value: '时尚',
  },
  {
    id: '7',
    value: '电影',
  },
  {
    id: '8',
    value: '游戏',
  },
];
const renderItem = (val: any): JSX.Element => {
  const {index, item} = val;
  return (
    <TouchableOpacity>
      <View style={[styles.item]}>
        <Text style={styles.title}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};
function Index(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const onRefresh = () => {
    // setLoading(true);
  };
  return (
    <View style={[styles.container]}>
      <Text style={{textAlign: 'center'}}>FlatList</Text>
      <SafeAreaView>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => {
            //申明列表项之间添加的内容
            return <Text style={styles.itemSeporator}></Text>;
          }}
          ListEmptyComponent={() => {
            //列表数据为空时展示的组件
            return <Text>空空乳液</Text>;
          }}
          //下拉刷新
          refreshing={loading}
          onRefresh={onRefresh}
          //上拉加载
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            Alert.alert('到底了');
          }}
          ListHeaderComponent={()=>{
            //申明列表头部
            return <Text>列表头部</Text>
          }}
          ListFooterComponent={()=>{
            //申明列表底部
            return <Text style={{textAlign:"center"}}>没有更多</Text>
          }}
          horizontal={false} //水平布局模式
          initialScrollIndex={1} //指定初始的滚动索引
          initialNumToRender={7} //指定初始渲染数据的数量,一般数量要填满一屏
          numColumns={1} //多列展示不支持瀑布流效果
          inverted={false} //列表翻转
          extraData={2}
        />
      </SafeAreaView>
    </View>
  );
}
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  itemSeporator: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
