import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';


export default function load(){
    return(
        <View style={style.container}>
            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={style.animation}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    animation:{
        backgroundColor: 'transparent',
    
        width: 200,
        height: 200,
    }
})

