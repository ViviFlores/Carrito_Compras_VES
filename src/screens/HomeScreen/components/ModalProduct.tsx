import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Product } from '../HomeScreen'
import { ERROR_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { stylesGlobal } from '../../../theme/appTheme';

interface Props{
    product: Product;
    isVisible: boolean;
    changeVisible:()=>void;
    handlerChangeStockProduct:(idProducto: number, quantity: number)=>void;
}

export const ModalProduct = ({product, isVisible, changeVisible, handlerChangeStockProduct}:Props) => {
    //Hook para la dimensión de mi pantalla
    const {width}=useWindowDimensions();
    //Hook para el valor de la cantidad de productos
    const [quantity, setQuantity] = useState(1);
    //Función para trabajar la cantidad de productos
    const handlerChangeQuantity=(value: number)=>{
        setQuantity(quantity+value)
    }

    //Función para agregar el producto - actualizar stock
    const handlerAddProducto=()=>{
        handlerChangeStockProduct(product.id, quantity);
        //cambiar la cantidad
        setQuantity(1)
        //cerrar el modal
        changeVisible()
    }

  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={stylesGlobal.root}>
            <View style={{width: width*0.80,
                        ...stylesGlobal.content}}>
                <View style={stylesGlobal.headerModal}>
                    <Text style={stylesGlobal.title}>{product.name}  -  ${product.price.toFixed(2)}</Text>      
                    <View style={stylesGlobal.iconClose}>     
                        <Icon name={'cancel'} size={20} color={PRIMARY_COLOR} onPress={changeVisible}/>
                    </View>
                </View> 
                <View style={styles.image}>
                    <Image 
                        source={{
                            uri: product.pathImage
                        }}
                        style={{width:200, height:200}}/>
                </View>
                {
                    (product.stock == 0)
                    ?<Text style={styles.textStock}>Producto agotado!</Text>
                    :
                    <View>
                        <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.buttonQuantity}
                            onPress={()=>handlerChangeQuantity(-1)}
                            disabled={quantity == 1}>
                            <Text style={styles.buttonQuantityText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.textQuantity}>{quantity}</Text>
                        <TouchableOpacity style={styles.buttonQuantity}
                            onPress={()=>handlerChangeQuantity(1)}
                            disabled={quantity == product.stock}>
                            <Text style={styles.buttonQuantityText}>+</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.textQuantity}>Total: ${(product.price*quantity).toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonCar}
                            onPress={handlerAddProducto}>
                            <Text style={styles.buttonCarText}>Agregar Carrito</Text>
                        </TouchableOpacity>
                    </View>
                }
                
            </View>
        </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    image:{
        alignItems:'center'
    },
    quantityContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonQuantity:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:PRIMARY_COLOR,
        borderRadius:30,
        margin:15
    }, 
    buttonQuantityText:{
        color:SECONDARY_COLOR,
        fontSize:20,
        fontWeight:'bold'
    },
    textQuantity:{
        fontSize:20,
        color:'#000'
    },
    buttonCar:{
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:10,
        alignItems:'center',
        borderRadius:7,
        marginTop:15
    },
    buttonCarText:{
        color:'#fff',
        fontWeight:'bold'
    },
    textStock:{
        fontSize:20,
        color:ERROR_COLOR,
        textAlign:'center'
    }

})