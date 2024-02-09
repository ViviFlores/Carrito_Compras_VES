import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { INPUT_COLOR } from '../commons/constantsColor'

interface InputProps{
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string)=>void;
    isPassword?: boolean;
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword=false}:InputProps) => {
  return (
    <TextInput
        placeholder={placeholder}
        keyboardType='default'
        style={styles.inputText}
        onChangeText={(value: string)=>onChangeText(name, value)}
        secureTextEntry={isPassword}/>
  )
}

const styles=StyleSheet.create({
    inputText:{
        backgroundColor: INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10, 
        marginVertical:7
    }
})
