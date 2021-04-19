import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';


import colors from '../styles/colors';

export default function Button(props){
    return(
        <TouchableOpacity style={style.button}>
            <Text style={style.buttontxt}>
                {props.title}
            </Text>
        </TouchableOpacity>     
    );
}


const style = StyleSheet.create({
    buttontxt:{
        color: colors.white,

        fontSize: 24,
    },
    button:{
        backgroundColor: colors.green,

        borderRadius: 16,

        justifyContent: 'center',
        alignItems: 'center',

        width: 56,
        height: 56,

        marginBottom: 10,
    },
})