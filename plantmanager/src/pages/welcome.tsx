import React from 'react';
import { SafeAreaView, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import x from '../assets/watering.png';
import colors from '../styles/colors';
import Button from '../components/button';

export default function Welcome(){
    return(
        <SafeAreaView style={style.container}>

            <Text style={style.title}>
            Gerencie {'\n'}
            suas plantas de
            {'\n'} forma fácil
            </Text>

            <Image source={x} style={style.image}/>

            <Text style={style.subtitle}>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
            sempre que precisar.
            </Text>

        <Button 
            title=">"
        />

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',

        textAlign: 'center',

        color: colors.heading,

        marginTop: 38,
    },
    subtitle:{
        textAlign: 'center',

        fontSize: 18,

        color: colors.heading,

        paddingHorizontal: 20,
    },
    image:{
        width: 292,
        height: 284,
    }
})