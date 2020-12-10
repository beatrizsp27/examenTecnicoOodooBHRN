/**
 * @description elemento que se muesta en la pantalla del listado de elementos
 * @author Beatriz Hernandez <beatiz.hernandez27sp@gmail.com>
 * @version 1.0 
 */
import React from 'react'
import { View, Text } from 'react-native'
import estilosPantalla from '../Estilos/EstiloPantallaListado';

/**
 * @description funcion que retorna un elemento del listado
 * @author Beatriz Hernandez <beatiz.hernandez27sp@gmail.com>
 * @version 1.0 
 * @param elemento - objeto que contiene informacion del elemento del listado de tikcet
 */
export const elementoLista = ({ item }) => {
    return (
        <View style={estilosPantalla.elemento}>
            <Text>{item.user}</Text>
            {/* <Text style={estilosPantalla.titulo}>{elemento.user}</Text>
            <Text style={estilosPantalla.titulo}>{elemento.number}</Text>
            <Text style={estilosPantalla.titulo}>{elemento.date}</Text>
            <Text style={estilosPantalla.titulo}>{elemento.amount}</Text> */}
        </View>
    )
}




