/**
 * @description elemento que se muesta en la pantalla del listado de elementos
 * @author Beatriz Hernandez <beatiz.hernandez27sp@gmail.com>
 * @version 1.0 
 */
import React from 'react'
import { View, Image } from 'react-native'
import estilosPantalla from '../Estilos/EstiloPantallaListado';

/**
 * @description funcion que retorna un elemento del listado
 * @author Beatriz Hernandez <beatiz.hernandez27sp@gmail.com>
 * @version 1.0 
 * @param elemento - objeto que contiene informacion del elemento
 */
export const elementoLista = ({ elemento }) => {
    return (
        <View style={estilosPantalla.contenidoTarjeta}>
            <View style={estilosPantalla.contenidoTarjetaFilaImagen}>
                <Image
                    style={estilosPantalla.imagen}
                    source={elemento.type == 'visa' ? require('../Recursos/imagenes/Visa.png')
                        : elemento.type == 'master card' ? require('../Recursos/imagenes/tarjeta-mastercard.png')
                            : elemento.type == 'amex' ? require('../Recursos/imagenes/american.png')
                                : require('../Recursos/imagenes/mastercard.png')
                    }
                />
            </View>
            <View style={estilosPantalla.contenidoTarjetaFilaDescripcion} >
                <Text style={estilosPantalla.titulo}>{elemento.type}</Text>
                <Text style={estilosPantalla.titulo}>{elemento.img}</Text>
            </View>

        </View>
    )
}




