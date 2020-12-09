/**
* @description Archivo que contiene las funciones y el return del listado de tikets
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'

//ESTILOS 
import estilosPantalla from '../Estilos/EstiloPantallaListado';
//COMPONENTE
import ElementoLista from '../componentes/ElementoListaTicket';
import ComponenteBoton from '../componentes/ComponenteBoton';

//SERVICIOS
import { obtenerTiketsUsuario } from '../Servicios/ServicioTikets';

/**
* @description Funcion que contiene el listado de tickets
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
const PantallaListadoTiket = ({ history }) => {

    //SE RENDERIZA EL COMPONENTE
    const renderItem = ({ item }) => (
        <ElementoLista elemento={item} />
    );

    //INICIALIZACION DE HOOKS
    const [listadoTikets, setListadoTikets] = useState([])
    const [estaCargando, setEsCargando] = useState(true)

    /**
    * @description funcion que obtiene el listado de ticket
    * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
    * @version 1.0
    */
    async function obtenerListadoTicketServicio() {
        obtenerTiketsUsuario()
            .then((respuesta) => {
                console.log("respuesta" + respuesta)
                setListadoTikets(respuesta)
                setEsCargando(false)
            })
            .catch((error) => {
                console.log("respuesta" + error)
                console.log("error: ");
                Alert.alert('Error!', 'Error al obtener el listado de tarjetas', [
                    { text: 'Aceptar' }
                ]);
                setListadoTikets([])
                setEsCargando(false)
                return;
            })
    }

    //ARREGLO DEL OBJETO DE PRUEBA
    const respuestaTiket = [
        {
            "id": 1,
            "user": 1,
            "number": "QHJKFDIUWE",
            "date": "2020-01-01 12:00:00",
            "amount": 100
        },
        {
            "id": 2,
            "user": 1,
            "number": "IOQKMFPOSD",
            "date": "2020-01-04 14:00:00",
            "amount": 20.5
        }
    ]


    /**
    * @description funcion principal que se ejecuta para escuhar los eventos
    * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
    * @version 1.0
    */
    useEffect(() => {
        obtenerListadoTicketServicio()
    }, []);

    if (estaCargando) {
        return (
            <ActivityIndicator />
        );
    } else {
        //SE RENDERIZA LA INFORMACION
        return (
            <View>
                <Text> Listado de ticket</Text>
                {/* <Button title="Regresar" onPress={() => { history.push("/") }} ></Button> */}
                <ComponenteBoton
                    title="Regresar"
                    action={() => { history.push("/") }}
                    bgColor="#3D74B5"
                    color={'#F7F8FA'}
                />
                <SafeAreaView style={estilosPantalla.container}>
                    <FlatList
                        data={respuestaTiket}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        );
    }



};

export default PantallaListadoTiket;