import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../styles/colors';

import Welcome from '../pages/welcome';
import UserIdentication from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSelection from '../pages/PlantSelect';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';
import AuthRoutes from './tabs.routes'

const StackRoutes = createStackNavigator();


const AppRoutes : React.FC = () => (
    <StackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: colors.white
            }
        }}
    >

        <StackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />
        <StackRoutes.Screen 
            name="Identification"
            component={UserIdentication}
        />
        <StackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />
         <StackRoutes.Screen 
            name="PlantSelect"
            component={AuthRoutes}
        />
           <StackRoutes.Screen 
            name="PlantSave"
            component={PlantSave}
        />
           <StackRoutes.Screen 
            name="MyPlants"
            component={AuthRoutes}
        />
        


    </StackRoutes.Navigator>
)


export default AppRoutes;