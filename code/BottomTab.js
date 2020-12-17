import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DashboardScreen, ProfilScreen, ChatScreen, ListCompany} from './BottomScreen';


const Tab = createBottomTabNavigator();


const ButtomTabBuKas = ()=>{  
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
          <Tab.Screen 
            name="ChatScreen" 
            component={ChatScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../asset/chat.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
          <Tab.Screen 
            name="Account" 
            component={ProfilScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../asset/profile.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
        </Tab.Navigator>
    );
  }
    
export default ButtomTabBuKas;