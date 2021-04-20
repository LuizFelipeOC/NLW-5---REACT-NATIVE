import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}


export default function Button({title, ... rest}: ButtonProps){
    return(
        <TouchableOpacity 
        style={style.container} 
        {...rest}
        >
            <Text style={style.buttontxt}>
                {title      }
            </Text>
        </TouchableOpacity>     
    );
}


const style = StyleSheet.create({
    container:{
        backgroundColor: colors.green,

        height: 56,

        borderRadius: 16,

        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontxt:{
        fontSize: 16,

        color: colors.white,
    },
})