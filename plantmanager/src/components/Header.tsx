import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {getStatusBarHeight} from 'react-native-iphone-x-helper'

import colors from '../styles/colors';
import fontes from '../styles/fonts';

import userImg from '../assets/pp.png';
import { color } from 'react-native-reanimated';
import fonts from '../styles/fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header(){
    return(
        <SafeAreaView style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>Luiz</Text>
            </View>

            <Image 
                source={userImg}
                style={style.img}
            />
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    container:{
        flexDirection: 'row',

        width: '100%',

        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: 20,
        
        marginTop: getStatusBarHeight()
    },
    img:{
        width: 70,
        height: 70,

        borderRadius: 40,
    },
    greeting:{
        fontSize: 32,
        fontFamily: fonts.text,
        
        color: colors.heading,
    },
    userName:{
        fontFamily: fonts.heading,
        fontSize: 32,

        color: colors.heading,

        lineHeight: 40,
    }

})