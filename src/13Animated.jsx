/**
 * Animated.View
 * Animated.Text
 * Animated.ScrollView
 * Animated.Image
 * 四个组件是可以直接使用动画的
 * 
 * 如何创建动画(步骤)
 * 1.创建初始值
 *   Animated.Value()单个值
 *   Animated.ValueXY()向量值
 * 2.将初始值绑定在动画组件上
 *   一般将其绑定在某个样式的属性下，列如opacity、translate
 * 3通过动画类型API,一帧一帧的改变初始值
 *   Animated.decay()加速效果
 *   Animated.spring()弹跳效果
 *   Animated.timing()时间渐变效果
 */
import React, { useEffect } from 'react'
import { Animated, Text, View, StyleSheet, Button, Alert } from 'react-native'
export default function Index() {
  //将透明度设置为0
  const fadeAnim = new Animated.Value(0);
  const moveAnim = new Animated.Value(0);
  // const fadeAnim = new Animated.Value(0);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,//目标值
      duration: 1000,//动画执行时间
      useNativeDriver: true//启用原生方式渲染动画
    }).start(() => {
      //执行回调
      Alert.alert("我显示出来了")
    })
  }
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }
  useEffect(() => {
    //组件加载后执行动画
    scanMove()
  }, [])
  const scanMove = () => {
    //将moveAnim的初始值设置为0
    moveAnim.setValue(0);
    Animated.timing(moveAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true
    }).start(() => { scanMove() })
  }
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>

      <View style={[ styles.scanContainer ]}>
        <Animated.View
          style={[
            styles.border,
            {
              transform: [ {
                translateY: moveAnim
              } ] // Bind opacity to animated value
            }
          ]}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  },
  scanContainer: {
    height: 200,
    width: 200,
    borderColor: "green",
    borderWidth: 1
  },
  border: {
    borderColor: "red",
    borderWidth: 1
  }
});