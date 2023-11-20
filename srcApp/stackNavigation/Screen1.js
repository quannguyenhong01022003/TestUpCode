import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
    const {navigation} = props
    

    const clickContinute = () =>{
        navigation.navigate('Screen2', {"name": "Quân", "old": '21'})
    }
  return (
    <View>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={clickContinute} style = {{backgroundColor:'blue', marginTop: 30, padding: 10, width: 100, borderRadius: 9}}><Text style={{textAlign:'center', color:'white'}}>Continute</Text></TouchableOpacity>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})