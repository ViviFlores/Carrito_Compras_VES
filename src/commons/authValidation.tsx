import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { LoginForm } from "../screens/LoginScreen";
import { RegisterForm } from "../screens/RegisterScreen";


export const hasErrorFormLogin=(form: LoginForm)=>{
    return form.username == '' || form.password == ''
}

export const hasErrorFormRegister=(form: RegisterForm)=>{
    return form.email == '' || form.username == '' || form.password == ''
}

export const verifyExistUser=(users: User[], form: LoginForm)=>{
    return users.filter(user=>user.username == form.username)[0];
} 

//Función para el snackBar reutilizable
export const showSnackBar=(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor:'white'
    });
}

// Función para generar los ids de los nuevos usuarios
export const getIdNewUser=(users: User[])=>{
    const getIdUser=users.map(user=>user.id);
    return Math.max(...getIdUser)+1;

}

