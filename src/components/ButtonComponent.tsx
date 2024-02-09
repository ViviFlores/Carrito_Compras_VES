import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/constantsColor'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:15,
        borderRadius:10
    },
    buttonText:{
        textAlign:'center',
        color:SECONDARY_COLOR,
        fontSize:14,
        fontWeight:'bold'
    }
})