import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet, 
    Text,
    View,
    FlatList,
    ActivityIndicator,
    ActivityIndicatorBase
} from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';    

import Load from '../components/load'
import Header from '../components/Header';
import EnviromentButton from '../components/EnviromentButton';
import api from '../service/api';
import { CardPrimary } from '../components/PlantCardPrimary';
import { useNavigation } from '@react-navigation/core';
import { PlantProps } from '../libs/storage';


interface EnverimontProps{
    key: string;
    title: string;
}



export default function PlantSelection (){
    const [environments, setEnvironments] = useState<EnverimontProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);


    const navigation = useNavigation();
    
    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment);

        if (environment === 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant =>
            plant.environments.includes(environment)
        )

        setFilteredPlants(filtered);
    }

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

        if (!data)
            return setLoading(true);

        if (page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data);
            setFilteredPlants(data);
        }

        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants()
    }


    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', {plant})
    }

    useEffect(() => {
        async function fetchEnvironment() {
            const { data } = await api
                .get('plants_environments?_sort=title&_order=asc');

            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fetchEnvironment();
    }, [])

    useEffect(() => {
        fetchPlants();
    }, [])

    if (loading)
        return <Load />


    return(
        <SafeAreaView  style={style.container}>

            <View style={style.header}>
                <Header />
                <Text style={style.title}>Em qual ambiente</Text>
                <Text style={style.subtitle}>você colocar sua planta?</Text>
            </View>

            <View>
                <FlatList 
                    data={environments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({item}) => (
                        <EnviromentButton title={item.title} 
                        active={item.key === environmentSelected}
                        onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    contentContainerStyle={style.enverimonentList}
                />  
            </View>

            <View style={style.plants}>
                <FlatList 
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <CardPrimary 
                        data={item}
                        onPress={() => handlePlantSelect(item)}
                        /> 
                        
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.2}
                    onEndReached={ ({distanceFromEnd}) => 
                        handleFetchMore(distanceFromEnd) }

                    ListFooterComponent = { loadingMore ? <ActivityIndicator color={colors.green} />
                        :<></>
                    }
                    contentContainerStyle={style.contentStyle}
                />
            </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        
        flex: 1,
    },
    title:{
        color: colors.heading,

        fontSize: 17,
        fontFamily: fonts.heading,

        lineHeight: 20,

        marginTop: 15,

    },  

    subtitle:{
        fontFamily: fonts.text,
        fontSize: 17,

        lineHeight: 20,

        color: colors.heading
    },
    header:{
        paddingHorizontal: 30,
    },
    enverimonentList:{
        height: 40,
        justifyContent: 'center',

        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    },
    plants:{
        flex: 1,

        paddingHorizontal: 32,

        justifyContent: 'center'
    }, 
    contentStyle:{

    }
})