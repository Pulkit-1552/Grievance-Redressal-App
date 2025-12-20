import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { style } from '../styles/style';

const InputBox = ({text}) => {
  return (
    <View>
      <TextInput placeholder={text} style={style.issueBoxes}/>
    </View>
  )
}

export default InputBox;