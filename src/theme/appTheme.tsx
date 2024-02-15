import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constantsColor";

export const stylesGlobal=StyleSheet.create({
    textPrincipal:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    },
    textDescription:{
        fontSize:15
    },
    containerForm:{
        marginVertical:10
    },
    textNavigation:{
        color:PRIMARY_COLOR,
        fontSize:15,
        marginTop:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})