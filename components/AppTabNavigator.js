import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookRequestScreen from '../screens/BookRequestScreen';
import BookDonateScreen from '../screens/BookDonateScreen';

export const AppTabNavigator = createBottomTabNavigator({

    DonateScreen: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image 
                          source = {require("../assets/request-list.png")}
                          style = {{ width: 30, height: 30 }}/>,
            tabBarLabel: "Donate Books"
        }
    },

    RequestScreen: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image 
                          source = {require("../assets/request-book.png")}
                          style = {{ width: 30, height: 30 }}/>,
            tabBarLabel: "Request Books"
        }
    }

});