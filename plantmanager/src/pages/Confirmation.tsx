import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';


import colors from '../styles/colors'
import Button from '../components/button';
import fonts from '../styles/fonts';    


export default function Confirmation(){
    return(
        <SafeAreaView style={style.container}>
            <View style={style.content}>

                <Text style={style.emoji}>
                    😄
                </Text>

                <Text style={style.title}>
                    Prontinho
                </Text>

                <Text style={style.subtitle}>
                    Agora vamos começar a cuidar das suas plantas
                    com muito carinho
                </Text>

                <View style={style.footer}>
                     <Button title="Começar" />
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