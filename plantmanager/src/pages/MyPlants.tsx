import React, { useEffect, useState } from 'react';
import { View,
    StyleSheet,
    Image,
    Text,
    FlatList,
    Alert
} from 'react-native';
import Header from '../components/Header';


import colors from '../styles/colors'
import fontes from '../styles/fonts';
import waterdrop from '../assets/waterdrop.png'
import { loadPlant, PlantProps, removePlant, StoragePlantProps } from '../libs/storage';
import { formatDistance } from 'date-fns/esm';
import { id, pt } from 'date-fns/locale';
import fonts from '../styles/fonts';
import { CardSecudary } from '../components/PlantCardSecondary';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function  MyPlants(){
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();
  
    useEffect(() => {
      async function loadStorageData() {
        const plantsStoraged = await loadPlant();
        
        const nextTime = formatDistance(
          new Date(plantsStoraged[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          {
            locale: pt
          }
        )
  
        setNextWatered(`Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}`)
        setMyPlants(plantsStoraged);
        setLoading(false);
      }
  
      loadStorageData()
    }, [])


    

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
          {
            text: 'Não 🙏',
            style: 'cancel'
          },
          {
            text: 'Sim 😢',
            onPress: async() => {
              try {
                    const data = await AsyncStorage.getItem('@plantmanager:plants');
                    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

                    delete plants[plant.id]

                    await AsyncStorage.setItem(
                        '@plantmanager:plants',
                        JSON.stringify(plants)
                    );

                    setMyPlants((oldData) => (
                        oldData.filter((item) => item.id != plant.id)
                    ))   

              } catch (error) {
                Alert.alert('Não foi possível remover! 😢')
              }
            }
          }
        ])
      }


    return(
        <View style={style.container}>

            <Header />

            <View style={style.spotLight}>
                <Image
                source={waterdrop}
                style={style.spotLightIMG}
                 />

                 <Text style={style.spotLightTXT}>
                    {nextWatered}
                 </Text>
            </View>

            <View style={style.plants}>
                <Text style={style.plantasTitle}>Proximas regadas</Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                       <CardSecudary 
                        data={item}
                        handleRemove={() => {handleRemove(item)} } 
                       />
                    )}

                    showsVerticalScrollIndicator={false}
                />
             
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 30,
        padding: 50, 

        backgroundColor: colors.background,
    },
    spotLight:{
      backgroundColor: colors.blue_light,

     paddingHorizontal: 20,

     borderRadius: 20,
     height: 110,

     flexDirection: 'row',

     justifyContent: 'space-between',
     alignItems: 'center',
    },
    spotLightIMG:{
        width: 60,
        height: 60,
    },
    spotLightTXT:{
        paddingHorizontal: 20,

        flex: 1,

        color: colors.blue,
    },

    plantasTitle:{
        fontSize: 24,
        fontFamily: fonts.heading,
        
        color: colors.heading,

        marginVertical: 20,
    },
    plants:{
       flex: 1,
       
       width: '100%'
    }
})