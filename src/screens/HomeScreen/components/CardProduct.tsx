import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Product } from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../../../commons/constantsColor'
import { ModalProduct } from './ModalProduct'

interface Props{
    product: Product;
    handlerChangeStockProduct:(idProducto: number, quantity: number)=>void;
}

export const CardProduct = ({product, handlerChangeStockProduct}:Props) => {

    // Hook que controla el modal 
    const [showModal, setShowModal] = useState(false);
    
  return (
    <View>
        <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
            <View style={styles.root}>
                <Image
                    source={{
                        uri: product.pathImage
                    }}
                    style={styles.image}/>
                    <View>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text>Precio: ${product.price.toFixed(2)}</Text>
                    </View>
                <View style={styles.icon}>
                    <Icon name={'shopping-cart-checkout'} size={30} color={PRIMARY_COLOR}/>
                </View>
            </View>
        </TouchableOpacity>
        <ModalProduct product={product} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)} handlerChangeStockProduct={handlerChangeStockProduct}/>
    </View>
  )
}

const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderStyle:'solid',
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        marginBottom:15
    },
    image:{
        width:70,
        height:70
    },
    title:{
        fontWeight:'bold',
        color:'#000',
        fontSize:15
    },
    icon:{
        flex:1,
        alignItems:'flex-end'
    }
})