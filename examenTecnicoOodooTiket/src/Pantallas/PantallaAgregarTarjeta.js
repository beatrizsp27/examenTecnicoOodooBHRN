/**
* @description Funcion que muesta la tarjeta
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TextInput } from 'react-native'
import CreditCardDisplay from 'react-native-credit-card-display';

//COMPONENTE
import ComponenteBoton from '../componentes/ComponenteBoton';
import estilosPantalla from '../Estilos/EstiloPantallaListado';

import { connect } from 'react-redux';
import { agregarTarjeta } from '../Acciones/AccionesTarjeta';

/**
* @description Funcion que muesta la tarjeta
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
const PantallaAgregarTarjeta = (props) => {

    const [estaCargando, setEsCargando] = useState(true)
    const [numeroTarjeta, setNumeroTarjeta] = useState(0)
    const [nombreUsuario, setNombreUsuario] = useState('')

    let tarjeta = null;

    //ASIGNAR EL VALOR A LA TARJETA
    async function ontenerValorIngresado(valor) {
        console.log("ontenerValorIngresado")
        console.log("ontenerValorIngresado" + valor)
        setNumeroTarjeta(valor)
    }

    //ASIGNAR EL VALOR A LA TARJETA
    async function ontenerValorIngresadoNombre(valor) {
        console.log("ontenerValorIngresado")
        console.log("ontenerValorIngresado" + valor)
        setNombreUsuario(valor)
    }

    //ASIGNAR EL VALOR A LA TARJETA
    async function insertarTarjeta() {
        console.log("ontenerValorIngresado")
        console.log("ontenerValorIngresado" + numeroTarjeta)
        props.agregarTarjeta(numeroTarjeta)
        props.history.push("/PantallaListadoTarjetas")
    }


    /**
    * @description funcion principal que se ejecuta para escuhar los eventos
    * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
    * @version 1.0
    */
    useEffect(() => {
        setEsCargando(false)
    }, []);

    if (estaCargando) {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    } else {
        //SE RENDERIZA LA INFORMACION
        return (
            <View style={estilosPantalla.contenidoTarjetaAgregar}>
                <Text style={estilosPantalla.tituloTexto}> Ingresa una nueva tarjeta</Text>

                <CreditCardDisplay
                    number={numeroTarjeta}
                    cvc={123}
                    name={nombreUsuario}
                />

                <TextInput
                    placeholder="Ingresa el número de tarjeta"
                    placeholderTextColor="#666666"
                    style={[estilosPantalla.textInput, {
                        color: "#3D74B5"
                    }]}
                    maxLength={50}
                    autoCapitalize="none"
                    keyboardType='numeric'
                    maxLength={14}
                    onChangeText={value => ontenerValorIngresado(value)}
                />
                <TextInput
                    placeholder="Ingresa el tipo de tarjeta"
                    placeholderTextColor="#666666"
                    style={[estilosPantalla.textInput, {
                        color: "#3D74B5"
                    }]}
                    maxLength={50}
                    autoCapitalize="none"
                    keyboardType='default'
                    maxLength={14}
                    onChangeText={value => ontenerValorIngresadoNombre(value)}
                />

                <ComponenteBoton
                    title="Guardar"
                    action={() => insertarTarjeta()}
                    bgColor="#3D74B5"
                    color={'#F7F8FA'}
                    des={numeroTarjeta == 0 && nombreUsuario == ''}
                />
                <ComponenteBoton
                    title="Cancelar"
                    action={() => { props.history.push("/PantallaListadoTarjetas") }}
                    bgColor="red"
                    color={'#F7F8FA'}
                />
            </View >
        );
    }
};

//SE CONTECTA CON LA TIENDA DE ALMACENAMIENTO PARA OBTENER LA LISTA DE TARJETAS
const mapStateToProps = (state) => {
    console.log(state);
    return {
        listaTarjetas: state.reducerTarjetaReducer.listaTarjetas
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        agregarTarjeta: (tarjeta) => dispatch(agregarTarjeta(tarjeta))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PantallaAgregarTarjeta);
