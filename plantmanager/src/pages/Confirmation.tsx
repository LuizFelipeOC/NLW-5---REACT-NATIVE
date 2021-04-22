import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';


import colors from '../styles/colors'
import Button from '../components/button';
import fonts from '../styles/fonts';    
import { useNavigation, useRoute } from '@react-navigation/core';
import { round } from 'react-native-reanimated';



interface Params{
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    Nextscreen: string;
}

const emojis = {
    smile: '😁',
    hug: '🤗',
}


export default function Confirmation(){

    const navigation = useNavigation();
    const Routes = useRoute();

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        Nextscreen
    } = Routes.params as Params;

    function plantSelect(){
        navigation.navigate(Nextscreen)
    }

    return(
        <SafeAreaView style={style.container}>
            <View style={style.content}>

                <Text style={style.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={style.title}>
                    {title}
                </Text>

                <Text style={style.subtitle}>
                    {subtitle}
                </Text>

                <View style={style.footer}>
                     <Button title={buttonTitle} onPress={plantSelect} />
                </View>

            </View>

            

        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container:{
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content:{
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',

        padding: 30,
    },
    emoji:{
        fontSize: 78, 
    }, 
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,

        textAlign: 'center',
        lineHeight: 38,

        marginTop: 15,
    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize: 17,

        paddingVertical: 10,

        color: colors.heading,

        textAlign: 'center',
    },
    footer:{
        width: '100%',

        paddingHorizontal: 75,
        marginTop: 20,
    },
    })