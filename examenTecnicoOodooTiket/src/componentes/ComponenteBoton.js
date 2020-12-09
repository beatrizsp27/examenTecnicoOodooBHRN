/* eslint-disable react-native/no-color-literals */
/**
 * @author Beatriz Hernandez <beatiz.hernandez27sp@gmail.com>
 * @version 1.0 
 * @param  action -Accion que ejecutara el boton al ser precionado
 * @param  bgColor - Color del backwround del boton
 * @param  setWidth - Bandera Bolean para validar si se toma el ancho del telefono
 * @param  iconName - Nombre del icono del boton
 * @param iconColor - Color del icono del boton
 * @param title titulo del boton
 */
import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    responsiveHeight as h,
    responsiveWidth as w,
} from 'react-native-responsive-dimensions';
import PropTypes from 'prop-types';

const ComponenteBotonRectangularConTexto = props => {
    return (
        <Button
            onPress={props.action}
            disabled={props.des}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
                backgroundColor: props.bgColor,
                borderWidth: 0,
                marginBottom: 5,
                marginTop: h(1),
                justifyContent: 'center',
                alignItems: 'center',
                width: w(80),
                height: h(6),
                borderRadius: h(2.5),
                borderColor: 'rgb(0, 100, 30)',
                alignSelf : 'center',
            }}
            title={props.title}
            // eslint-disable-next-line react-native/no-inline-styles
            titleStyle={{
                textAlign: 'center',
                color: props.color,
            }}
            icon={<Icon name={props.iconName} size={15} color={props.iconColor} />}
            text={props.title}
            iconRight={true}
            loading={props.isLoding}
        />
    );
};

ComponenteBotonRectangularConTexto.propTypes = {
    isLoding: PropTypes.bool,
    iconName: PropTypes.any,
    iconColor: PropTypes.any,
    color: PropTypes.any,
    des: PropTypes.bool,
    title: PropTypes.any,
    action: PropTypes.any,
    bgColor: PropTypes.any,
};

export default ComponenteBotonRectangularConTexto;
