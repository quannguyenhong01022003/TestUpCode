import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const flexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
    </View>
  );
};

export default flexBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',   // quyêt định xem những component trong nó sắp xếp theo chiều nào
    justifyContent:'center', // quyết định những view con sắp xếp theo vị trí như thế nào, sắp xếp cùng hướng với flexDirection
    alignItems:'center',  // sắp xếp ngược hướng với flexDirection
    flexWrap:'wrap'  // Nếu có quá nhiều view trên 1 hàng thì nó sẽ tự động xuống dòng
  },
  view1:{
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  view2:{
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    alignSelf: 'flex-end'
  },
  view3:{
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },
  view4:{
    width: 50,
    height: 50,
    backgroundColor: 'white'
  }
});
