import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen2 = (props) => {
    const {navigation, route} = props
    const {params} = route
    const clickContinute = () =>{
        navigation.navigate('Screen1')
    }
  return (
    <View>
      <Text>Screen2</Text>
      <TouchableOpacity onPress={clickContinute} style = {{backgroundColor:'blue', marginTop: 30, padding: 10, width: 100, borderRadius: 9}}><Text style={{textAlign:'center', color:'white'}}>Continute</Text></TouchableOpacity>

      {/* <Text>{params.name}</Text>
      <Text>{params.old}</Text> */}
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})