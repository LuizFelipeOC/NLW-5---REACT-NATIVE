import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Text,
    SafeAreaView,
    Alert,
    View,
    Image
} from 'react-native';

import {SvgFromUri} from 'react-native-svg'
import {useNavigation, useRoute} from '@react-navigation/core'
import DataTimePicker, { Event  } from '@react-native-community/datetimepicker';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import waterdrop from '../assets/waterdrop.png'
import Button from '../components/button';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { isBefore, format } from 'date-fns';
import { loadPlant, PlantProps, savePlant} from '../libs/storage';

interface Params{
    plant: PlantProps;
    
}

export default function PlantSave () {

    const [SelectedDateTime, setSelectedDateTime] = useState(new Date());
    const [ShowDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

    const route = useRoute();
    const navigation = useNavigation()

    const { plant } = route.params as Params;


    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState);

        }
        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert("Escolha uma hora no futuro! ⏰")
        }
        if(dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDatetimePickerforAndroid(){
        setShowDatePicker(oldState => !oldState)
    }

    async function handleSave(){
        try{

            await savePlant({
                ... plant,
                dateTimeNotification: SelectedDateTime
            })

            navigation.navigate('Confirmation', {
                title: 'Tudo Certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você da sua plantinha com muito cuidado.',
                buttonTitle: 'Muito Obrigado!',
                icon: 'hug',
                Nextscreen: 'MyPlants'
            })

        }catch{
            return Alert.alert('Não foi possivel salvar! 😥')
        }
    }

    return(
        <>

        <SafeAreaView style={style.container}>
            <View style={style.plantInfo}>

                <SvgFromUri 
                    uri={plant.photo}
                    height={70}
                    width={70}
                />



                <Text style={style.plantName}>{plant.name}</Text>


                <Text style={style.plantAbout} >
                   {plant.about}
                </Text>

            </View>


            <View style={style.controller}>
                    <View style={style.tipContainer}>
                        <Image 
                            source={waterdrop}
                            style={style.tipImage}
                        />
                        <Text style={style.tipTitle}>
                            {plant.water_tips}
                        </Text>
                    </View>


                <Text style={style.alertLabel}>
                    Escolha o melhor horário para ser lembrado: 
                </Text>

                { ShowDatePicker && (
                <DataTimePicker 
                    value={SelectedDateTime}
                    mode="time"
                    display="spinner"

                    onChange={handleChangeTime}
                />
                )}  

                {
                    Platform.OS == 'android' && (
                        <TouchableOpacity
                            onPress={handleOpenDatetimePickerforAndroid}
                            style={style.DatetimePickerButton}
                        >
                            <Text style={style.dataTimePickerText}> 
                                {'Mudar ${format(selectedDateTime, HH:MM)}'}
                            </Text>
                         </TouchableOpacity>
                    )

                    

                }   

                <Button title="Cadastrar planta" onPress={handleSave}/>
            </View>
        </SafeAreaView>

        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,

        justifyContent: 'space-between',


        backgroundColor: colors.shape,
    },
    plantName:{
        fontFamily: fonts.heading,
        fontSize: 20,

        color: colors.heading,

    },
    plantAbout:{
        textAlign: 'center',

        fontFamily: fonts.text,
        fontSize: 17,

        color: colors.heading,

        marginTop: 10,
        marginBottom: 20,
    },
    controller:{
        backgroundColor: colors.white,

        paddingHorizontal: 20,
        paddingTop: 0,
        paddingBottom: getBottomSpace()  || 20,
    },
    tipContainer:{
        flexDirection: 'row',

        
        alignItems: 'center',

        backgroundColor: colors.blue_light,

        padding: 10,

        borderRadius: 20,

        position: 'relative',

        bottom: 60,

        marginTop: 40,
    },
    tipImage:{
        height: 56,
        width: 56,
    },
    tipTitle:{
        flex: 1,

        marginLeft: 20,

        fontFamily: fonts.text,
        fontSize: 14,

        color: colors.blue,

        textAlign: 'justify',
    },
    alertLabel:{
        textAlign: 'center',

        fontFamily: fonts.complement,
        fontSize: 12,

        color: colors.heading,

        marginBottom: 5,
    },
    plantInfo:{
        flex: 1,

        paddingHorizontal: 30,
        paddingVertical: 30,
        
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: colors.shape,

    },
    dataTimePickerText:{
        color: colors.heading,

        fontSize: 24,
        fontFamily: fonts.text,
    },
    DatetimePickerButton:{
        width: '100%',

        alignItems: 'center',

        paddingVertical: 40
    }
    
})