import React, { useState } from 'react'
import { StatusBar, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TitleComponent } from '../components/TitleComponent'
import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Snackbar from 'react-native-snackbar';
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../theme/appTheme';
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { hasErrorFormLogin, showSnackBar, verifyExistUser } from '../commons/authValidation';

export interface LoginForm{
    username: string,
    password: string;
    hasError: boolean;
}

//interface Props extends StackScreenProps<any,any>{};
interface LoginProps{
  users:User[]
}

export const LoginScreen = ({users}:LoginProps) => {

  //Hook de navegación
  const navigation=useNavigation();

  //hook useState
  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<LoginForm>({
    username:'',
    password:'',
    hasError:false
  });

  //Hook cambiar el contenido del input password
  const [hiddenPassword, setHiddenPassword] = useState(true);

  //Hook numero
  //const [numero, setNumero] = useState(0);

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
    //Validar que los campos se encuentren llenos
    if(hasErrorFormLogin(form)){
      setForm(prevState=>({
        ...prevState,
          hasError:true
      }))
      return;
    }

    setForm(prevState=>({
      ...prevState,
        hasError:false
    }))

  //Llamar función para verificar si el usuario existe
  const existUser= verifyExistUser(users, form)
    if(!existUser || existUser.password != form.password){
      showSnackBar("Usuario y/o contraseña incorrecta!", ERROR_COLOR)
      return;
    }
    //console.log(form)
    navigation.dispatch(CommonActions.navigate({name:'HomeScreen'}))
  }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesión'/>
        <BodyComponent>
            <Text style={stylesGlobal.textPrincipal}>Bienvenido de nuevo!</Text>
            <Text style={stylesGlobal.textDescription}>Realiza tus compras de manera rápida y segura</Text>
            <View style={stylesGlobal.containerForm}>
                <InputComponent placeholder='Usuario' name='username' onChangeText={handlerChangeText} hasError={form.hasError}/>
                <InputComponent 
                  placeholder='Contraseña' 
                  name='password' 
                  onChangeText={handlerChangeText}
                  isPassword={hiddenPassword}
                  hasIcon={true}
                  accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                  hasError={form.hasError}/>
            </View>
            {/* <TextInput
              placeholder='número'
              keyboardType='numeric'
              onChangeText={(numero:string)=>setNumero(parseInt(numero))}
            /> */}
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
            <TouchableOpacity
              onPress={()=>navigation.dispatch(CommonActions.navigate({name:'RegisterScreen'}))}>
              <Text style={stylesGlobal.textNavigation}>No tienes cuenta? Regístrate ahora</Text>
            </TouchableOpacity>
        </BodyComponent>
    </View>
  )
}
