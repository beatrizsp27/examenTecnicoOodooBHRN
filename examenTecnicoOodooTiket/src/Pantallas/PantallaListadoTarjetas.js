/**
* @description Funcion que agrega las tarjetas
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
import React, { useEffect } from 'react';
import { View, Text, Alert, Image, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import { eliminarTarjeta, agregarTarjeta } from '../Acciones/AccionesTarjeta';

//ESTILOS 
import estilosPantalla from '../Estilos/EstiloPantallaListado';

//COMPONENTE
import ComponenteBoton from '../componentes/ComponenteBoton';

//SERVICIOS
import { obtenerListadoTarjeta } from '../Servicios/ServicioTikets';


/**
* @description Funcion que agrega las tarjetas
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
const PantallaListadoTarjetas = (props) => {

    //INICIALIZACION DE HOOKS
    const [listadoTarjetas, setListadoTarjeta] = React.useState([])
    const [estaCargando, setEsCargando] = React.useState(true)


    const eliminarTarjeta = (id) => {
        console.log("tarjeta")
        console.log("id::: " + id)
        props.eliminarTarjetaR(id)

    }
    /**
    * @description Funcion que muestra la tarjeta por elemento
    * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
    * @version 1.0
    */
    const ElementoLista = ({ elemento }) => (
        <TouchableOpacity style={estilosPantalla.contenidoElementoTarjeta}>
            <View style={estilosPantalla.contenidoTarjetaFilaImagen}>
                <Image
                    style={estilosPantalla.imagen}
                    source={elemento.type == 'visa' ? require('../Recursos/imagenes/Visa.png')
                        : elemento.type == 'master card' ? require('../Recursos/imagenes/tarjeta-mastercard.png')
                            : elemento.type == 'amex' ? require('../Recursos/imagenes/american.png')
                                : require('../Recursos/imagenes/mastercard.png')
                    }
                    resizeMode='contain'
                />
            </View>
            <View style={estilosPantalla.contenidoTarjetaFilaDescripcion}>
                <View style={estilosPantalla.contenidoEliminar}>
                    <View style={estilosPantalla.contenidoEliminarFila1}>
                        <Text style={estilosPantalla.titulo}>{elemento.type}</Text>
                        <Text style={estilosPantalla.titulo}>{elemento.img}</Text>
                    </View>
                    <TouchableOpacity style={estilosPantalla.contenidoEliminarFila2}
                        onPress={() => { eliminarTarjeta(elemento.id) }}>
                        <Text style={{ color: 'red' }}> Eliminar</Text>
                    </TouchableOpacity>


                </View>
            </View>

        </TouchableOpacity>
    );

    //SE RENDERIZA EL COMPONENTE
    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <ElementoLista
                elemento={item}
            />
        );
    };


    async function obtenerListadoTarjetaServicio() {
        obtenerListadoTarjeta()
            .then((respuesta) => {
                console.log("respuesta" + respuesta)
                setListadoTarjeta(respuesta)
                // porps.agregarTarjeta(respuesta.)
                setEsCargando(false)
            })
            .catch((error) => {
                console.log("respuesta::::: " + error)
                console.log("error: ");
                Alert.alert('Error!', 'Error al obtener el listado de tarjetas', [
                    { text: 'Aceptar' }
                ]);
                setListadoTarjeta([])
                setEsCargando(false)
                return;
            })
    }

    /**
* @description funcion principal que se ejecuta para escuhar los eventos
* @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
* @version 1.0
*/
    useEffect(() => {
        obtenerListadoTarjetaServicio()
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
            <ScrollView >
                <SafeAreaView style={estilosPantalla.container}>
                    <Text style={estilosPantalla.tituloTexto}> Listado de tarjetas</Text>
                    <ComponenteBoton
                        title="Regresar"
                        action={() => { props.history.push("/") }}
                        bgColor="#3D74B5"
                        color={'#F7F8FA'}
                    />
                    <ComponenteBoton
                        title="Nueva tarjeta"
                        action={() => { props.history.push("/PantallaAgregarTarjeta") }}
                        bgColor="#3D74B5"
                        color={'#F7F8FA'}
                    />
                    <FlatList
                        data={props.listaTarjetas}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </SafeAreaView>
            </ScrollView >
        );
    }
};


const mapStateToProps = (state) => {
    console.log("::::::state::::: " + state);
    return {
        listaTarjetas: state.reducerTarjetaReducer.listaTarjetas
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        eliminarTarjetaR: (id) => dispatch(eliminarTarjeta(id))
    }
}

const mapDispatchToPropsAlmacenar = (dispatch) => {
    return {
        agregarTarjeta: (tarjeta) => dispatch(agregarTarjeta(tarjeta))
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mapDispatchToPropsAlmacenar)(PantallaListadoTarjetas);

// export default PantallaListadoTarjetas;