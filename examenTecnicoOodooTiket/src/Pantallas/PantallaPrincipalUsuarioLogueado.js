/**
 * @description Pantalla principal que se muestra al iniciar sesión con el usuario
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from '../componentes/context';
import estilos from '../Estilos/EstiloPantallaUsuarioLogueado'

//COMPONENTE 
import ComponenteBoton from '../componentes/ComponenteBoton';


const PantallaPrincipalUsuarioLogueado = ({ history }) => {

    //SE CIERRA SESION CON CONTEXTO DE AUTENTICACION redux
    const { signOut } = React.useContext(AuthContext);


    return (

        <View>

            <View style={estilos.menuPrincipaContenido}>
                <View style={estilos.tarjetaTexto}>
                    <Text style={estilos.titulo}>Bienvenid@,  Selecciona una opción</Text>
                </View>
                <TouchableOpacity style={estilos.tarjeta}
                    onPress={() => { history.push("/PantallaListadoTarjetas") }} >
                    <Text style={estilos.titulo} >Tarjetas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.tarjeta}
                    onPress={() => { history.push("/PantallaListadoTiket") }}
                >
                    <Text style={estilos.titulo}>Tickets</Text>
                </TouchableOpacity>
                <View style={estilos.tarjetaTexto}>
                    <ComponenteBoton
                        title="Salir"
                        action={signOut}
                        bgColor="#3D74B5"
                        color={'#F7F8FA'}
                    />
                </View>
                {/* <Button title="Detalle de tiket" onPress={signOut} ></Button> */}

            </View>
        </View>

    );


};

export default PantallaPrincipalUsuarioLogueado;