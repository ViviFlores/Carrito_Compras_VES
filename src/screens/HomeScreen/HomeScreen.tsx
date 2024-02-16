import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';

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
    {id:2, name:'Funda de azucar', price: 1.10, stock:5, pathImage:'https://mhmarket.ec/wp-content/uploads/sites/2/2020/11/9601037.jpg'},
    {id:3, name:'Funda de papas', price: 2.50, stock:3, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg'},
    {id:4, name:'Funda de fideos', price: 1.00, stock:4, pathImage:'https://almacenescorsa.com/wp-content/uploads/2021/07/Fideo-Lazo-Amancay-400g.jpg'},
    {id:5, name:'Funda de sal', price: 0.65, stock:15, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
    {id:6, name:'Funda de sal', price: 0.65, stock:15, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
    {id:7, name:'Funda de sal', price: 0.65, stock:15, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'},
]

export const HomeScreen = () => {
  return (
    <View>
        <TitleComponent title='Productos'/>
        <BodyComponent>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=><CardProduct product={item}/>}
                />
        </BodyComponent>
    </View>
  )
}
