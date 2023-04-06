import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  /**
   * 添加数据
   * @param key
   * @param value
   * @returns
   */
  static set(key: string, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }
  /**
   * 获取数据
   * @param key
   * @returns
   */
  static get(key: string) {
    return AsyncStorage.getItem(key)
      .then(value => {
        if (value && value !== '') {
          const jsonValue = JSON.parse(value);
        }
      })
      .catch(() => null);
  }
  /**
   * 更新数据
   * @param {string} key
   * @param {mixed} newValue
   * @returns
   */
  static update(key: string, newValue: any) {
    return AsyncStorage.getItem(key).then(oldValue => {
      newValue =
        typeof newValue === 'string'
          ? newValue
          : Object.assign({}, oldValue, newValue);
      return AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  }
  /**
   * 删除数据
   * @param key
   * @returns
   */
  static delete(key: string) {
    return AsyncStorage.removeItem(key);
  }
  /**
   * 清空所有的数据
   * @returns
   */
  static clear() {
    return AsyncStorage.clear();
  }
}
export default Storage;
