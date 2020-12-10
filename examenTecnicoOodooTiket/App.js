
/**
 * @description Pantalla que decidira que navegación mostrar
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import React, { useState, useEffect } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//IMPORT GENERALES DE USAURIO LOGUEADO Y NO LOGEADO
import NavegacionUsuarioLogueado from './src/Navegaciones/NavegacionUsuarioLogueado';
import NavegacionUsuarioNoLogueado from './src/Navegaciones/NavegacionUsuarioNoLogueado';

//ESTILOS 
import estilos from './src/Estilos/EstilosApp';

//SERVICIOS
import { AuthContext } from './src/componentes/context'
import { INICIAR_SESION, CERRAR_SESION, RECUPERAR_TOKEN } from './src/Acciones/TiposConstantes';
import { estadosInicialesLogin, iniciarSesionReducer } from './src/Reducers/ReducerAccionesInicioSesion';

/**
 * @description Pantalla que decidira que navegación mostrar la cual controlara lo que se le mostrará al usuario
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const App: () => React$Node = () => {


  //SE ENVIA LA INFORMACION CON REACT RECUDER MANDANDO A LLAMAR LAR FUNCIONES
  const [loginState, dispatch] = React.useReducer(iniciarSesionReducer, estadosInicialesLogin);

  /**
 * @description Funcion que memoriza la informacion del login y estados
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
  //MEMORIZA LA INFORMACIÓN DEL USUARIO
  const authContext = React.useMemo(() => ({
    signIn: async (nombreUsuario, contrasenia) => {

      console.log("nombreUsuario: app", nombreUsuario)
      console.log("contrasenia: app", contrasenia)

      let tokenUsuario = null;

      //SE VALIDA QUE EL USUARIO Y LA CONTRASENIA SEAN CORRECTAS 
      if (nombreUsuario == 'prueba' && contrasenia == '12345678') {

        //SE ASIGNA TOKEN
        tokenUsuario = "JJJJJJJJJJ"

        //SE ALMACENA EL TOKEN EN ASYC STORAGE
        try {
          await AsyncStorage.setItem('tokenUsuario', tokenUsuario);
          await AsyncStorage.setItem('nombreUsuario', nombreUsuario);

        } catch (e) {
          console.log(e);
        }
      }
      console.log("tokenUsuario::::", tokenUsuario)
      //SE DISPARA EL EVENTO 
      dispatch({ type: INICIAR_SESION, id: nombreUsuario, token: tokenUsuario });
    },
    signOut: async () => {
      console.log("salir::::")

      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: CERRAR_SESION });
    }

  }), []);


  /**
 * @description funcion principal que se ejecuta para escuhar los eventos
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('tokenUsuario');
        nombreUsuario = await AsyncStorage.getItem('tokenUsuario');

        console.log("userToken: useEfect: " + userToken)

        //Se valida que el usuario sea diferente de nulo en caso de que sea correcto se envia a la navegacion del login
        if (userToken != null) {
          dispatch({ type: INICIAR_SESION, id: nombreUsuario, token: userToken });
        } else {
          //Se valida que el usuario sea diferente de nulo en caso de que sea correcto se envia a la navegacion del logout cierre de sesión 
          dispatch({ type: CERRAR_SESION });
        }

      } catch (e) {
        console.log(e);
      }
      console.log('user token:::: ', userToken);
    }, 1000);
  }, []);

  if (loginState.esCargando) {
    return (
      <View>
        <ActivityIndicator></ActivityIndicator>
      </View>
    )
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <AuthContext.Provider value={authContext}>
          <View style={estilos.menuPrincipal}>
            {loginState.tokenUsuario != null ?
              <NavegacionUsuarioLogueado />
              :
              <NavegacionUsuarioNoLogueado />
            }
          </View>
        </AuthContext.Provider>
      </>
    );
  }


};

export default App;
