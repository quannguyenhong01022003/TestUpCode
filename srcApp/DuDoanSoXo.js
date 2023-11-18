import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DuDoanSoXo = () => {
  const [result, setresult] = useState('Kết quả: ');
  const [soDuDoan, setsoDuDoan] = useState(1);

  const duDoan = () =>{
    let numberRandom = Math.floor(Math.random() * 100) + 1
    if(soDuDoan == numberRandom){
        setresult("Bạn đã trúng thưởng với số dự đoán là: " + numberRandom)
    }else(
        setresult('Chúc bạn may mắn lần sau')
    )
  }

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginTop: 50,
          color: 'blue',
          fontWeight: 'bold',
        }}>
        Dự đoán xổ số
      </Text>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginTop: 50,
          marginBottom: 20,
          color: 'green',
          fontWeight: 'bold',
        }}>
        Nhập số từ 1 đến 100
      </Text>

      <TextInput
        onChangeText={newText => setsoDuDoan(newText)}
        placeholder="Nhập 1 số may mắn"
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'red',
          marginHorizontal: 20,
          marginVertical: 20,
          marginBottom: 30,
        }}></TextInput>

      <TouchableOpacity
      onPress={duDoan}
        style={{
          backgroundColor: 'green',
          marginHorizontal: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            padding: 10,
          }}>
          Quay số
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          textAlign: 'center',
          color: 'violet',
          fontSize: 20,
          marginTop: 30,
        }}>
        {result}
      </Text>
    </View>
  );
};

export default DuDoanSoXo;
