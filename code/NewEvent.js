import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfilScreen } from './BottomScreen';


const New = createBottomTabNavigator();

const NewEvent = ()=>{  
    return (
        <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#000000',
        }}
        >
          <Tab.Screen 
            name="New" 
            component={ProfilScreen}
            options={{
              tabBarIcon: ({size}) => (
                <Image
                source={require('../asset/new.png')}
                  style={{
                    width: size,
                    height: size,
                  }}/>),
              }}
              />
        </Tab.Navigator>
    );
  }

export default TabNewEvent;