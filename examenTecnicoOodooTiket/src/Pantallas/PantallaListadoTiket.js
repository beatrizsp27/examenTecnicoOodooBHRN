/**
* @description Archivo que contiene las funciones y el return del listado de tikets
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native'

//ESTILOS 
import estilosPantalla from '../Estilos/EstiloPantallaListado';
//COMPONENTE
import ComponenteBoton from '../componentes/ComponenteBoton';

//SERVICIOS
import { obtenerTiketsUsuario } from '../Servicios/ServicioTikets';

/**
* @description Funcion que contiene el listado de tickets
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
const PantallaListadoTiket = ({ history }) => {

    const ElementoListaTicket = ({ elemento }) => (
        <TouchableOpacity style={estilosPantalla.elemento}>
            <Text style={estilosPantalla.titulo}>Numero Tiket: {elemento.number}</Text>
            <Text style={estilosPantalla.titulo}>Fecha Ticket: {elemento.date}</Text>
            <Text style={estilosPantalla.titulo}>Monto tiket: {elemento.amount}</Text>
        </TouchableOpacity>
    );

    //SE RENDERIZA EL COMPONENTE
    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <ElementoListaTicket
                elemento={item}
            />
        );
    };

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
                Alert.alert('Error!', 'Error al obtener el listado de Tikets', [
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
        // obtenerListadoTicketServicio()
        setEsCargando(false)
    });

    if (estaCargando) {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    } else {
        //SE RENDERIZA LA INFORMACION
        return (
            <View>
                <Text style={estilosPantalla.tituloTexto}> Listado de ticket</Text>
                <ComponenteBoton
                    title="Regresar"
                    action={() => { history.push("/") }}
                    bgColor="#3D74B5"
                    color={'#F7F8FA'}
                />
                {
                    respuestaTiket.length > 0 ?
                        <SafeAreaView style={estilosPantalla.container}>
                            <FlatList
                                data={respuestaTiket}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </SafeAreaView>
                        :
                        <Text style={estilosPantalla.tituloTexto}> No hay tickets a mostrar</Text>

                }

            </View>
        );
    }



};

export default PantallaListadoTiket;