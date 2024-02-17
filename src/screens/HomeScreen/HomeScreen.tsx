import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCar } from './components/ModalCar';

//Data prueba
export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

const products:Product[]=[
    {id:1, name:'Funda de arroz', price: 0.90, stock:10, pathImage:'https://www.megaprimavera.com/wp-content/uploads/arroz-blanco-gustadina-2-kg.png'},
    {id:2, name:'Funda de azucar', price: 1.10, stock:0, pathImage:'https://mhmarket.ec/wp-content/uploads/sites/2/2020/11/9601037.jpg'},
    {id:3, name:'Funda de papas', price: 2.50, stock:3, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg'},
    {id:4, name:'Funda de fideos', price: 1.00, stock:4, pathImage:'https://almacenescorsa.com/wp-content/uploads/2021/07/Fideo-Lazo-Amancay-400g.jpg'},
    {id:5, name:'Funda de sal', price: 0.65, stock:15, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
    {id:6, name:'Funda de sal', price: 0.65, stock:15, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
    {id:7, name:'Funda de sal', price: 0.65, stock:15, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
]

export interface Car{
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const HomeScreen = () => {

  //Hook para actualizar el estado de los productos
  const [productsState, setProductsState] = useState(products);
  //Hook para capturar la lista de productos seleccionados
  const [cars, setCars] = useState<Car[]>([]);
  //Hook para gestionar el modal del car
  const [showModal, setShowModal] = useState(false);

  //Función para controlar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ? {...item,
        stock:item.stock-quantity}
      : item);
    setProductsState(updateStock)
    //llamar función añadir carrito
    addProduct(idProducto, quantity)
  }

  //Función agregar en el carrito de compras
  const addProduct=(idProduct: number, quantity: number)=>{
    const product=productsState.find((item)=>item.id == idProduct);

    //si no existe el producto
    if(!product){
      return;
    }

    //si existe el producto
    const newCar: Car={
      id:product.id,
      name:product.name,
      price:product.price,
      quantity: quantity
    }
    //Añadir en el carrito
    setCars(prevCars=>[...prevCars, newCar])
    //console.log(cars);
    
  }


  return (
    <View>
      <View style={styles.header}>
        <TitleComponent title='Productos'/>
        <View style={styles.iconCar}>
          <Text style={styles.textIconCar}>{cars.length}</Text>
          <Icon disabled={cars.length == 0} name={'shopping-cart'} size={27} color={'#fff'} onPress={()=>setShowModal(!showModal)}/>
        </View>
      </View>
        <BodyComponent>
            <FlatList
                data={productsState}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=><CardProduct product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
                />
        </BodyComponent>
        <ModalCar cars={cars} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)}/>
    </View>
  )
}

const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center'
  },
  iconCar:{
    flex:1,
    alignItems:'flex-end',
    paddingHorizontal:33
  },
  textIconCar:{
    backgroundColor:'#fff',
    paddingHorizontal:5,
    borderRadius:20,
    fontWeight:'bold',
    fontSize:12
  }
})