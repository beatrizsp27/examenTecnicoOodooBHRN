/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

//SE CONFIGURA EL ALMACENAMIENTO PARA CONFIGURAR LA TIENDA
import configureStore from './src/StoreRedux/StoreRedux';

//SE GENERA LA VARIABLE DE ALMACENAMIENTP
const almacenamiento = configureStore();

//SE PASA EL PARAMETRO DE ALMACENAMIENTO PARA QUE LA TIENDA ESTE DISPONIBLE EN TODA LA APLICACION
const ReduxApp = () =>
    <Provider store={almacenamiento}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => ReduxApp);

// AppRegistry.registerComponent(appName, () => App);
