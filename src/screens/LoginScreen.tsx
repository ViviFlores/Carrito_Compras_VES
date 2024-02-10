import React, { useState } from 'react'
import { StatusBar, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TitleComponent } from '../components/TitleComponent'
import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Snackbar from 'react-native-snackbar';
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../theme/appTheme';

interface UserForm{
    username: string,
    password: string;
    hasError: boolean;
}

//Data prueba
interface User{
  id: number,
  username: string,
  password: string
}

const users:User[]=[
  {id:1, username:'vflores', password:'123456'},
  {id:2, username:'caguas', password:'12345678'}
]

interface Props extends StackScreenProps<any,any>{};

export const LoginScreen = ({navigation}:Props) => {

  //hook useState
  //Gestionar los datos de mi formulario
  const [form, setForm] = useState<UserForm>({
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
    if(form.username == '' || form.password == ''){
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
    //console.log(numero);

    if(!verifyUser()){
      Snackbar.show({
        text: 'Usuario y/o contraseña incorrecta!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:ERROR_COLOR,
        textColor:'white'
      });
      return;
    }
    console.log(form)
  }

  //Función para verificar si existe el usuario
  const verifyUser=()=>{
    const existUser= users.filter(user=>user.username == form.username && user.password == form.password)[0];
    return existUser
  }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesión'/>
        <BodyComponent>
            <Text style={stylesGlobal.textPrincipal}>Bienvenido de nuevo!</Text>
            <Text style={stylesGlobal.textDescription}>Realiza tus compras de manera rápida y segura</Text>
            <View style={styles.containerForm}>
                <InputComponent placeholder='Usuario' name='username' onChangeText={handlerChangeText} hasError={form.hasError}/>
                <InputComponent 
                  placeholder='Contraseña' 
                  name='password' 
                  onChangeText={handlerChangeText}
                  isPassword={hiddenPassword}
                  hasError={form.hasError}/>
                <Icon 
                  style={styles.icon} 
                  name='visibility' 
                  size={20} 
                  color={PRIMARY_COLOR}
                  onPress={()=>setHiddenPassword(!hiddenPassword)}/>
            </View>
            {/* <TextInput
              placeholder='número'
              keyboardType='numeric'
              onChangeText={(numero:string)=>setNumero(parseInt(numero))}
            /> */}
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
            <TouchableOpacity
              onPress={()=>navigation.navigate('RegisterScreen')}>
              <Text style={styles.textRegister}>No tienes cuenta? Regístrate ahora</Text>
            </TouchableOpacity>
        </BodyComponent>
    </View>
  )
}

const styles=StyleSheet.create({
    containerForm:{
        marginVertical:10
    },
    icon:{
      position:'absolute',
      right:20,
      marginTop:85
    },
    textRegister:{
      color:PRIMARY_COLOR,
      fontSize:15,
      marginTop:20,
      fontWeight:'bold',
      textAlign:'center'
    }
})