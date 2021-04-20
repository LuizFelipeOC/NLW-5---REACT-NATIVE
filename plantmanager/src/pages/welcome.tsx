import React from 'react';
import { SafeAreaView,
Image,
Text,
StyleSheet,
TouchableOpacity,
Dimensions,
View} from 'react-native';
import {Feather} from '@expo/vector-icons'

import x from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';


export default function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Identification')
    }

    return(
        <SafeAreaView style={style.container}>

            <View style={style.wrapper}>

                <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas de
                {'\n'} forma fácil
                </Text>

                <Image
                source={x} 
                style={style.image}
                resizeMode="contain"
                />

                <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.
                </Text>

                <TouchableOpacity style={style.button}>
                    <Feather
                    name="chevron-right"
                    style={style.buttonIcon}
                    onPress={handleStart} />
            </TouchableOpacity>   

        </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',

        textAlign: 'center',

        fontFamily: fonts.heading,

        color: colors.heading,

        marginTop: 38,

        lineHeight: 30,
    },
    subtitle:{
        textAlign: 'center',

        fontSize: 18,
        fontFamily: fonts.text,

        color: colors.heading,

        paddingHorizontal: 20,
    },
    image:{
          height: Dimensions.get("window"). width * 0.7
    },
    buttonIcon:{
        color: colors.white,

        fontSize: 32,
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
    wrapper:{
        flex: 1,
        
        justifyContent: 'space-around',
        alignItems: 'center',

        paddingHorizontal: 20, 
    }
})