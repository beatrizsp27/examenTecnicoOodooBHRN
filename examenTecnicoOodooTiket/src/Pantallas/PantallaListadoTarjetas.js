import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'

//ESTILOS 
import estilosPantalla from '../Estilos/EstiloPantallaListado';
//COMPONENTE
import ElementoLista from '../componentes/ElementoLista';
//SERVICIOS
import { obtenerListadoTarjeta } from '../Servicios/ServicioTikets';

const PantallaListadoTarjetas = ({ history }) => {

    //SE RENDERIZA EL COMPONENTE
    const renderItem = ({ item }) => (
        <ElementoLista elemento={item} />
    );

    //INICIALIZACION DE HOOKS
    const [listadoTarjetas, setListadoTarjeta] = React.useState([])
    const [estaCargando, setEsCargando] = React.useState(true)


    async function obtenerListadoTarjetaServicio() {
        obtenerListadoTarjeta()
            .then((respuesta) => {
                console.log("respuesta" + respuesta)
                setListadoTarjeta(respuesta)
                setEsCargando(false)
            })
            .catch((error) => {
                console.log("respuesta" + error)
                console.log("error: ");
                Alert.alert('Error!', 'Error al obtener el listado de tarjetas', [
                    { text: 'Aceptar' }
                ]);
                setListadoTarjeta([])
                setEsCargando(false)
                return;
            })
    }

    //ARREGLO DEL OBJETO
    const imgTypeCard = [
        {
            "id": 1,
            "type": "visa",
            "img": "imagen visa"
        },
        {
            "id": 2,
            "type": "master card",
            "img": "imagen master card"
        },
        {
            "id": 3,
            "type": "amex",
            "img": "imagen amex"
        }
    ]


    /**
* @description funcion principal que se ejecuta para escuhar los eventos
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
    useEffect(() => {
        obtenerListadoTarjetaServicio()
    }, []);

    if (estaCargando) {
        return (
            <ActivityIndicator />
        );
    } else {
        //SE RENDERIZA LA INFORMACION
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text> PantallaDetalleTarjetas</Text>
                <Button title="home" onPress={() => { history.push("/") }} ></Button>
                <SafeAreaView style={estilosPantalla.container}>
                    <FlatList
                        data={imgTypeCard}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View >
        );
    }



};

export default PantallaListadoTarjetas;