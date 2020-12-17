import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import ButtomTab from './BottomTab';
import ChooseRegistrasi from "./ChooseRegistrasi";
import RegistrasiCompany from "./RegistrasiCompany";
import EditProfileHunter from "./EditProfileHunter";
import RegistrasiHunter from "./RegistrasiHunter";
import CompanyView from "./CompanyView";
import ProfilScreen from "./ProfilScreen";

const Stack = createStackNavigator();
const StackLayout = () => {
    return(
      <Stack.Navigator>
          <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name= "ChooseRegistrasi"
            component = {ChooseRegistrasi}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "RegistrasiCompany"
            component = {RegistrasiCompany}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "EditProfileHunter"
            component = {EditProfileHunter}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "ProfilScreen"
            component = {ProfilScreen}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "RegistrasiHunter"
            component = {RegistrasiHunter}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "ButtomTab"
            component = {ButtomTab}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "CompanyView"
            component = {CompanyView}
            options ={{headerShown: false}}
          />
      </Stack.Navigator>
    );
}

export {StackLayout};