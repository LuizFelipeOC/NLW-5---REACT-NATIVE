import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard, 
    Alert
} from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage'


export default function UserIdentication(){


    const navigation = useNavigation();

   async function handleSubmit(){
       if(!nome)
         return Alert.alert('Me diz como você se chama 😥')
        
        try{ 
         await  AsyncStorage.setItem('@plantmanager:user', nome);
         navigation.navigate('Confirmation', {
            title: 'Prontinho',
            subtitle: 'Agora vamos começar a cuidar de suas platinhas com muito cuidade',
            buttonTitle: 'Começar',
            icon: 'smile',
            Nextscreen: 'PlantSelect'
        })
    
        }catch{
            return Alert.alert('Não foi possviel salvar seu nome! 😥')
        }

         
        
     }


    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [nome, setIsNome] = useState<string>();

    function hanlderInputBlur(){
        setIsFocused(false);
        setIsFilled(!! nome);
    }

    function handlerInputFocused(){
        setIsFocused(true);
    }

    function hanlderInputChange(value: string){
        setIsFilled(!!!value); 
        setIsNome(value)    
    }


 
    return(
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView  
                style={style.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height' }
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={style.content}>

                            <View style={style.form}>
                                <View style={style.header}>
                                    <Text style={style.emoji}>
                                    😃
                                    </Text>
                                    <Text style={style.title}>
                                        Como podemos {'\n'}
                                        chamar você?
                                    </Text>
                                </View>

                                <TextInput 
                                    style={[
                                        style.input,
                                        (isFocused || isFilled) && {borderColor: colors.green }
                                    ]}
                                    placeholder="Digite eu nome"
                                    onBlur={hanlderInputBlur}
                                    onFocus={handlerInputFocused}
                                    onChangeText={hanlderInputChange}
                                />

                                <View style={style.footer}>
                                    <Button  title="Confirmar" onPress={handleSubmit}/>
                                </View>
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,

        width: '100%',

        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        width: '100%',
    },
    form:{
        flex: 1,

        justifyContent: 'center',

        paddingHorizontal: 54,

        alignItems: 'center',
    },
    header:{
        alignItems: 'center',
    },
    emoji:{
        fontSize: 44,
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: colors.heading,

        width: '100%',

        padding: 20,

        marginTop: 58,

        fontSize: 18,

        textAlign: 'center',
    },
    title:{
        color: colors.heading,

        fontFamily: fonts.heading, 
        fontSize: 32,
        textAlign: 'center',
    },
    footer:{
        marginTop: 40,

        width: '100%',

        paddingHorizontal: 20,
    },
})