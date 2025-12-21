import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { style } from '../styles/style';

const InputBox = ({text,heading,setValue}) => {
  return (
    <View>
      <Text style={style.heading}>{heading}</Text>
      <TextInput multiline placeholder={text} style={style.issueBoxes} onChangeText={(text)=>setValue(text)}/>
    </View>
  )
}

export default InputBox;