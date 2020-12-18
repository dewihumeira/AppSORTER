import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DashboardScreen, ListCompany} from './ButtomScreenCompany';


const Tab = createBottomTabNavigator();

const ButtomTabCompany = ()=>{  
    return (
        <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#000000',
        }}
        >
          <Tab.Screen 
            name="Home" 
            component={DashboardScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../asset/house.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
          <Tab.Screen 
            name="List Company" 
            component={ListCompany}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../asset/listc.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />   
        </Tab.Navigator>
    );
  }

export default ButtomTabCompany;