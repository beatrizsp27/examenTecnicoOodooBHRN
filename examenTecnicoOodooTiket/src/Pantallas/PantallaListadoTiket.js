import React from 'react';
import { View, Text, Alert, ImageBackground , Button} from 'react-native'

const PantallaDetalleTicket = ({ history }) => {

    return (
        <View>
            <Text>
                PantallaDetalleTicket
            </Text>
            <Button title="home" onPress={() => { history.push("/") }} ></Button>
        </View>
    );


};

export default PantallaDetalleTicket;