import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular, Jost_600SemiBold
} from '@expo-google-fonts/jost';

import Routes from './src/routes/';

export default function App() {

  const [fontsloaded] = useFonts ({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsloaded){
    return <AppLoading /> 
  }

  return (
    <Routes />
  );
}
