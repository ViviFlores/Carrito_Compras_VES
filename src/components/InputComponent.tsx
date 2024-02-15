import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ERROR_COLOR, INPUT_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface InputProps{
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string)=>void;
    isPassword?: boolean;
    hasIcon?: boolean;
    accionIcon?:()=>void;
    hasError:boolean;
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword=false, hasIcon=false, accionIcon=()=>{}, hasError}:InputProps) => {
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
            (hasIcon)
            ?<Icon style={styles.icon} name='visibility'size={20} color={PRIMARY_COLOR} onPress={accionIcon}/>
            :null
        }
        
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
    icon:{
        position:'absolute',
        right:20,
        marginTop:20
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
