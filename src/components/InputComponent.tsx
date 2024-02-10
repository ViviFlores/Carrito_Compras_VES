import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ERROR_COLOR, INPUT_COLOR } from '../commons/constantsColor'

interface InputProps{
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string)=>void;
    isPassword?: boolean;
    hasError:boolean;
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword=false, hasError}:InputProps) => {
  return (
    <View>
        <TextInput
            placeholder={placeholder}
            keyboardType='default'
            style={(hasError)
                    ?{...styles.inputText, ...styles.error}
                    :{...styles.inputText}}
            onChangeText={(value: string)=>onChangeText(name, value)}
            secureTextEntry={isPassword}/>
        {
            (hasError)
            ?<Text style={styles.errorText}>El campo es oblogatorio</Text>
            :null
        }
    </View>
  )
}

const styles=StyleSheet.create({
    inputText:{
        backgroundColor: INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10, 
        marginVertical:7
    }, 
    error:{
        borderColor:ERROR_COLOR,
        borderStyle:'solid',
        borderWidth:1
    },
    errorText:{
        color:ERROR_COLOR,
        fontSize:14,
        fontWeight:'bold'
    }
})
