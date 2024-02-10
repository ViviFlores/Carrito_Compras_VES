import React from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { stylesGlobal } from '../theme/appTheme'

export const RegisterScreen = () => {
  return (
    <View>
        <TitleComponent title='Regístrate'/>
        <BodyComponent>
            <Text style={stylesGlobal.textPrincipal}>Estás muy cerca!</Text>
            <Text style={stylesGlobal.textDescription}>Realiza tus compras de manera rápida y segura</Text>
        </BodyComponent>
    </View>
  )
}


