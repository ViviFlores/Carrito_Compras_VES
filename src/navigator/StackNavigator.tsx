import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

//Data prueba
export interface User{
  id: number,
  username: string,
  email: string,
  password: string
}

const users:User[]=[
  {id:1, username:'vflores', email:'vflores@gmail.com', password:'123456'},
  {id:2, username:'caguas',email:'vflores@gmail.com', password:'12345678'}
]

const Stack = createStackNavigator();


export const StackNavigator=()=> {
  //Hook para controlar el estado de los usuarios registrados
  const [usersLogin, setUsersLogin]=useState(users);

  //Funcioón agregar un nuevo usuario en usersLogin
  const hadlerAddUser=(user: User)=>{
    setUsersLogin([...usersLogin, user])
  }

  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} children={()=><LoginScreen users={usersLogin}/>} />
      <Stack.Screen name="RegisterScreen" options={{headerShown:false}} children={()=><RegisterScreen usersLogin={usersLogin} setUsersLogin={hadlerAddUser}/>} />
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen}/>
    </Stack.Navigator>
  );
}