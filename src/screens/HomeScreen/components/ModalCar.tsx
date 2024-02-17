import React from 'react'
import { Modal, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Car } from '../HomeScreen'
import { FlatList } from 'react-native-gesture-handler';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constantsColor';

interface Props{
    cars: Car[];
    isVisible: boolean;
    changeVisible:()=>void;
}

export const ModalCar = ({cars, isVisible, changeVisible}:Props) => {
    const {width}=useWindowDimensions();

    //Función para calcular el valor total a pagar
    const totalPay=()=>{
        let total=0
        cars.forEach(item=>{
            total+=(item.price*item.quantity)
        })
        return total;
    }

    return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={stylesGlobal.root}>
            <View style={{width: width*0.80,
                    ...stylesGlobal.content}}>
                <View style={stylesGlobal.headerModal}>
                    <Text style={stylesGlobal.title}>Mis Productos</Text>      
                    <View style={stylesGlobal.iconClose}>     
                        <Icon name={'cancel'} size={20} color={PRIMARY_COLOR} onPress={changeVisible}/>
                </View>
                </View>
                <View style={styles.infoTable}>
                    <Text style={styles.textHeaderTable}>Producto</Text>
                    <View style={styles.descriptionTable}>
                        <Text style={styles.descriptionText}>Pre.</Text>
                        <Text style={styles.descriptionText}>Cant.</Text>
                        <Text style={styles.descriptionText}>Total</Text>
                    </View>
                </View>
                <FlatList
                    data={cars}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item})=>
                    <View style={styles.infoTable}>
                        <Text>{item.name}</Text>
                        <View style={styles.descriptionTable}>
                            <Text style={styles.textValue}>${item.price.toFixed(2)}</Text>
                            <Text style={{paddingHorizontal:10,
                                    ...styles.textValue}}>{item.quantity}</Text>
                            <Text style={styles.textValue}>${(item.price*item.quantity).toFixed(2)}</Text>
                        </View>
                    </View>}/>
                <View style={styles.textTotalPay}>
                    <Text style={{fontWeight:'bold'}}>Total pagar: ${totalPay().toFixed(2)}</Text>
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    infoTable:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    descriptionTable:{
        flexDirection:'row'
    },
    descriptionText:{
        marginHorizontal:10,
        fontWeight:'bold',
        color:'#000'
    },
    textHeaderTable:{
        fontWeight:'bold',
        color:'#000'
    },
    textValue:{
        marginHorizontal:10
    },
    textTotalPay:{
        alignItems:'flex-end',
        marginTop:15
    }
})
