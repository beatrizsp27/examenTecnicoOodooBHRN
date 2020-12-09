import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import CreditCardDisplay from 'react-native-credit-card-display';

const PantallaAgregarTarjeta = ({ history }) => {


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
                <Text> Tarjeta</Text>
                <Button title="home" onPress={() => { history.push("/PantallaListadoTarjetas") }} ></Button>
                <CreditCardDisplay
                    number={4242424242424242}
                    cvc={123}
                    expiration="04/21"
                    name="John J. Doe"
                    since="2004"
                />
            </View >
        );
    }



};

export default PantallaAgregarTarjeta;