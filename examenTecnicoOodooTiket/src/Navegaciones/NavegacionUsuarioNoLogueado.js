
/**
 * @description archivo que contiene la navegacion de usuario no logueado
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import React from 'react';
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from "react-router-native";

//PANTALLAS
import PantallaInicioSesion from "../Pantallas/PantallaInicioSesion";

/**
 * @description función que contiene la navegacion de usuario no logueado
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const NavegacionUsuarioNoLogueado = () => {
    return (
        <NativeRouter>
            <View>
                <Switch>
                    <Route exact path="/" component={PantallaInicioSesion} />
                </Switch>
            </View>
        </NativeRouter>
    );


};

export default NavegacionUsuarioNoLogueado;