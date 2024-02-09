import React, { useState } from 'react'
import { StatusBar, Text, View, StyleSheet, TextInput } from 'react-native';
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constantsColor'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons'

interface UserForm{
    username: string,
    password: string;
}

export const LoginScreen = () => {

    //hook useState
    //Gestionar los datos de mi formulario
  const [form, setForm] = useState<UserForm>({
    username:'',
    password:''
  });

  //Hook numero
  const [numero, setNumero] = useState(0);

  //Función que cambiará los valores del formulario
  const handlerChangeText=(name: string, value: string)=>{
    //console.log(name); //clave - propiedad
    //console.log(value);  //valor de clave
    setForm(prevState =>({
        ...prevState,
        [name]:value
    }))
  }

  //Función que envia los datos del formulario
  const handlerSendInfo=()=>{
    console.log(form)
    console.log(numero);
    
  }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesión'/>
        <BodyComponent>
            <Text style={styles.textWelcome}>Bienvenido de nuevo!</Text>
            <Text style={styles.textDescription}>Realiza tus compras de manera rápida y segura</Text>
            <View style={styles.containerForm}>
                <InputComponent placeholder='Usuario' name='username' onChangeText={handlerChangeText}/>
                <InputComponent 
                  placeholder='Contraseña' 
                  name='password' 
                  onChangeText={handlerChangeText}
                  isPassword={true}/>
                <Icon name='visibility' size={20} color={PRIMARY_COLOR}/>
            </View>
            <TextInput
              placeholder='número'
              keyboardType='numeric'
              onChangeText={(numero:string)=>setNumero(parseInt(numero))}
            />
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
        </BodyComponent>
    </View>
  )
}

const styles=StyleSheet.create({
    textWelcome:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    },
    textDescription:{
        fontSize:15
    },
    containerForm:{
        marginVertical:10
    }
})