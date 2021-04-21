import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import {SvgFromUri} from 'react-native-svg';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps{
  data: {
    name: string
    photo: string   
  }
}

export const    CardPrimary = ({data, ...rest} : PlantProps) => {
    return(
      <RectButton 
        style={style.container}
        {... rest}
      >     
        <SvgFromUri uri={data.photo} width={70} height={70} />
        <Text style={style.txt}>
            {data.name}
        </Text>

       </RectButton>
    )
}


const style = StyleSheet.create({
    container:{
        backgroundColor: colors.shape,

        flex: 1,

        maxWidth: '45%',

        borderRadius: 20,

        paddingVertical: 10,

        margin: 10,

        alignItems: 'center',
 },

    txt:{
        color: colors.green_dark,

        fontFamily: fonts.heading,

        marginVertical: 16,
    }
})