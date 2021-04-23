import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular, Jost_600SemiBold
} from '@expo-google-fonts/jost';

import Routes from './src/routes/';
import { PlantProps } from './src/libs/storage';

export default function App() {

  const [fontsloaded] = useFonts ({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notifications => {
        const data = notifications.request.content.data.plant as PlantProps;
        console.log(data);
      }
    )

    return () => subscription.remove();
  },[])

  if(!fontsloaded){
    return <AppLoading /> 
  }

  return (
    <Routes />
  );
}
