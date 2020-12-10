/* eslint-disable react-native/no-color-literals */
/**
 * @description Pantalla principal que se muestra para que el usuario inicie sesión
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import React from 'react';
import { View, Text, Alert, Button, TextInput } from 'react-native';
import { AuthContext } from '../componentes/context';
import { Input } from 'react-native-elements';

//SERVICIOS
import { autenticarUsuarios } from '../Servicios/ServicioUsuario';

//COMPONENTES
import ComponenteBoton from '../componentes/ComponenteBoton';

//ESTILOS 
import estilos from '../Estilos/EstilosPantallaInicio';

/**
 * @description Funcion principal que se ejecuta cuando se accede al inicio de sesión 
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const PantallaInicioSesion = () => {

    const [data, setData] = React.useState({
        usuario: '',
        contrasenia: '',
        // check_textInputChange: false,
        // secureTextEntry: true,
        esUsuarioValido: true,
        contraseniaEsValida: true,
    });



    //FUNCIONES
    //SE MANDA A LLAMAR LA FUNCION MEDIANTE EL CONTEXTO
    const { signIn } = React.useContext(AuthContext);

    /**
     * @description Funcion que valida el inicio de sesion
     * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
     * @version 1.0
     */
    const iniciarSesionUsuario = (data) => {

        console.log(":::::::Inicio-iniciarSesion");
        console.log(":::::::Inicio-iniciarSesion: " + data.usuario);
        console.log(":::::::Inicio-iniciarSesion: " + data.contrasenia);

        //SE VALIDA QUE EL USUARIO Y LA CONTRASENA SEAN DIFERENTES DE NULL PARA PODER COMPARARLOS CON LOS DATOS DEL SERVICIO
        if (data.usuario != null && data.contrasenia != null) {

            //SE MANDA A LLAMAR EL SERVICIO
            autenticarUsuarios(data.usuario, data.contrasenia).then(
                (respuesta) => {
                    console.log("respuesta::: " + respuesta);
                    //SE INICIA SESION PARA ACCEDER A DASBOAR DE LA APLICACION
                    signIn(data.usuario, data.contrasenia)

                }).catch((error) => {
                    console.log("error: " + error);
                    signIn(data.usuario, data.contrasenia)

                    Alert.alert('Error inicio de sesión!', 'Ocurrió un error al intentar autenticarse.', [
                        { text: 'Aceptar' }
                    ]);
                    return;
                })

        } else {
            console.log("error: ");
            Alert.alert('Error inicio de sesión!', 'Para poder iniciar sesión debe ingresar su uario y contrasenia.', [
                { text: 'Aceptar' }
            ]);
            return;
        }
        console.log("FIN-iniciarSesion");

    }


    /**
     * @description Funcion que obtiene el valor ingresado
     * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
     * @version 1.0
     */
    const ontenerValorIngresadoUsuario = (usuario) => {
        console.log("usuario:::::::---", usuario);
        if (usuario.trim().length >= 4) {
            setData({
                ...data,
                usuario: usuario,
                // check_textInputChange: true,
                esUsuarioValido: true
            });
        } else {
            setData({
                ...data,
                usuario: usuario,
                // check_textInputChange: false,
                esUsuarioValido: false
            });
        }
    }


    /**
     * @description Funcion que obtiene el valor ingresado de la contrasenia y es enviada en el hook de datos
     * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
     * @version 1.0
     */
    const obtenerContrasenia = (contrasenia) => {
        console.log("contrasenia" + contrasenia)
        if (contrasenia.trim().length >= 8) {
            setData({
                ...data,
                contrasenia: contrasenia,
                contraseniaEsValida: true
            });
        } else {
            setData({
                ...data,
                contrasenia: contrasenia,
                contraseniaEsValida: false
            });
        }
    }

    return (
        <View >
            <View style={estilos.encabezado}>
                <Text style={estilos.titulo}> Iniciar Sesión!</Text>
            </View>
            <View style={estilos.mainContenido} >
                <View style={estilos.contendorCajaTexto}>
                    <TextInput
                        placeholder="Ingresa tu usuario"
                        placeholderTextColor="#666666"
                        style={[estilos.textInput, {
                            color: "#3D74B5"
                        }]}
                        maxLength={50}
                        autoCapitalize="none"
                        onChangeText={value => ontenerValorIngresadoUsuario(value)}
                    />
                    <View style={estilos.textInput} >
                        {data.esUsuarioValido ? null :
                            <Text style={estilos.errorMensaje}>Ingresa tu usuario.</Text>
                        }
                    </View>
                </View>
                <View style={estilos.contendorCajaTexto}>

                    <TextInput
                        placeholder="Ingresa tu contraseña "
                        placeholderTextColor="#666666"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={[estilos.textInput, {
                            color: "#3D74B5"
                        }]}
                        maxLength={8}
                        onChangeText={(contrasenia) => obtenerContrasenia(contrasenia)}
                    />
                    <View style={estilos.textInput} >
                        {data.contraseniaEsValida ? null :
                            <Text style={estilos.errorMensaje}>La contrasenia debe contener 8 caracteres.</Text>
                        }
                    </View>
                </View>

                <View style={estilos.contendorBoton}>
                    <ComponenteBoton
                        title="Iniciar sesión"
                        action={() => iniciarSesionUsuario(data)}
                        bgColor="#3D74B5"
                        color={'#F7F8FA'}
                        des={!data.contraseniaEsValida && !data.esUsuarioValido}
                    />
                </View>

            </View>

            {/* <Button
                title="Inicio de sesion"
                onPress={() => iniciarSesionUsuario(data)}
            ></Button> */}
        </View>
    );


};

export default PantallaInicioSesion;