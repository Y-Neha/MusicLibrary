import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Songs from './Songs';
import SongDetail from './SongDetail';

const MainStack = createStackNavigator();

const headerOption = {
    headerStyle: {backgroundColor: '#6a51ae' },
    headerTitleStyle: {color: '#fff' },
};

export default function Routes() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Songs" component={Songs} options={headerOption} />
                <MainStack.Screen name="Song Details" component={SongDetail} options={headerOption} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};