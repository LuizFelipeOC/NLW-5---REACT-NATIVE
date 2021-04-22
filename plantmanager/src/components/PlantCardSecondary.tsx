import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated';
import {SvgFromUri} from 'react-native-svg';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export const   CardSecudary = ({data, ...rest} : PlantProps) => {
    return(
      <RectButton 
        style={style.container}
        {... rest}
      >     
        <SvgFromUri uri={data.photo} width={50} height={50} />

        <Text style={style.title}>
              {data.name}
          </Text>
        <View style={style.details}>
          <Text style={style.timeLabel}>
              regar ás
          </Text>
          <Text style={style.time}>
              {data.hour}
          </Text>
        </View>

       </RectButton>
    )
}


const style = StyleSheet.create({
    container:{
      width: '100%',

      paddingHorizontal: 10,
      paddingVertical: 25,

      borderRadius: 20,

      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor: colors.shape,

      marginVertical: 20,
 },

    txt:{
        color: colors.green_dark,

        fontFamily: fonts.heading,

        marginVertical: 16,
    },
    title:{
      flex: 1,

      marginLeft: 10,

      fontFamily: fonts.heading,
      fontSize: 17,
    },
    details:{
      alignItems: 'flex-end',
      
      marginRight: 6,
    },
    timeLabel:{
      fontSize: 16,
      fontFamily: fonts.text,
      color: colors.body_light,
    },
    time:{
      marginTop: 6,

      fontSize: 16,
      fontFamily: fonts.heading,

      color: colors.body_dark,
    }
})