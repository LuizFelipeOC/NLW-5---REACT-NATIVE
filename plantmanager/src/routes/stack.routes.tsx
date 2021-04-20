import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../styles/colors';
import Welcome from '../pages/welcome';
import UserIdentication from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';

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


    </StackRoutes.Navigator>
)


export default AppRoutes;