import React from 'react';
import { 
    View,
    Text,
    StyleSheet

} from 'react-native';


import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface EnviromentButtonProps extends RectButtonProps{
   title: string;
   active?: boolean;
}


export default function EnviromentButton({

    title,
    active = false,
    ... rest

}: EnviromentButtonProps){
    return(
        <RectButton 
            style={[
                style.container,
                active && style.containerActive
             ]}
            {... rest}
        >

        <Text style={[
            style.txt,
            active && style.txtActivate
            ]}>
            { title }
        </Text>

        </RectButton>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: colors.shape,

        height: 40,
        width: 76,
        
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 12,

        marginHorizontal: 5,
    },
    containerActive:{
        color: colors.green,
        backgroundColor: colors.green_light,
    },
    txt:{
        color: colors.heading,

        fontFamily: fonts.text,
    },
    txtActivate:{
        fontFamily: fonts.heading,

        color: colors.green_dark,

    }
})