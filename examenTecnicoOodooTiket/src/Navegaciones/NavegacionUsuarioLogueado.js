
/**
 * @description archivo que contiene la navegacion de usuario logueado
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import React from 'react';
import { View} from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

//PANTALLA PARA NAVEGAR
import PantallaPrincipalUsuarioLogueado from "../Pantallas/PantallaPrincipalUsuarioLogueado";
import PantallaListadoTiket from "../Pantallas/PantallaListadoTiket";
import PantallaListadoTarjetas from "../Pantallas/PantallaListadoTarjetas";

/**
 * @description Pantalla que contiene la navegacion de usuario logueado
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const NavegacionUsuarioLogueado = () => {
    return (
        <NativeRouter>
            <View>
                <Switch>
                    <Route exact path="/" component={PantallaPrincipalUsuarioLogueado} />
                    <Route exact path="/PantallaListadoTiket" component={PantallaListadoTiket} />
                    <Route exact path="/PantallaListadoTarjetas" component={PantallaListadoTarjetas} />
                </Switch>
            </View>
        </NativeRouter>
    );
};

export default NavegacionUsuarioLogueado;