import {View, Text, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';

const Calculator = () => {
  const [num1, setnum1] = useState(2); // set giá trị ban đầu
  const [num2, setnum2] = useState(3);
  const [sum, setsum] = useState(9);

const luaChon = (isChoose) =>{
    setnum1(Math.floor(Math.random() * 10))
    setnum2(Math.floor(Math.random() * 10))
    setsum(Math.floor(Math.random() * 10))

    let tong = num1 + num2
    if((tong == sum && isChoose == true) || (tong != sum && isChoose == false)){
         
    }else(
       alert("Bạn đã chọn sai ")
    )

   
}

  return (
    <View>
      <Text style={{color: 'red', textAlign: 'center', fontSize: 40}}>
        Đúng hay sai?
      </Text>
      <Text
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 50,
          textAlign: 'center',
        }}>
        {num1} + {num2}
      </Text>

      <Text
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 50,
          textAlign: 'center',
        }}>
        =
      </Text>

      <Text
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 50,
          textAlign: 'center',
        }}>
        {sum}
      </Text>

    <Pressable onPress={() => luaChon(true)} style={{borderWidth:1, padding: 10, backgroundColor:'green', marginBottom: 15}}>
        <Text style={{color:'white', textAlign:'center', fontSize: 20}}>Đúng</Text>
    </Pressable>
    <Pressable onPress={() => luaChon(false)} style={{borderWidth:1, padding: 10, backgroundColor:'gray'}}>
        <Text style={{color:'white', textAlign:'center', fontSize: 20}}>Sai</Text>
    </Pressable>
    </View>
  );
};

export default Calculator;
