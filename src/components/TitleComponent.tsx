import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

interface TitleProps{
    title: string;
}

export const TitleComponent = ({title}:TitleProps) => {
  const {height}=useWindowDimensions();
  return (
    <View>
        <Text style={{
            height:height*0.12,
            ...styles.title}}>{title}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    title:{
        color:'white',
        fontSize:27,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:30
    }
})
