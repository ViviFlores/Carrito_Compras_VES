import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { UserForm } from "../screens/LoginScreen";

export const hasErrorForm=(form: UserForm)=>{
    return form.username == '' || form.password == ''
}

export const verifyExistUser=(users: User[], form: UserForm)=>{
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
