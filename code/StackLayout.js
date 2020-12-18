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
import { ViewComponent } from "react-native";
import ViewCompany from "./ViewCompany";
import WebView from "react-native-webview";
import ButtomTabCompany from './ButtomTabCompany';
import HunterView from "./HunterView";
import EventNew from "./EventNew";


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
            name= "ButtomTabCompany"
            component = {ButtomTabCompany}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "CompanyView"
            component = {CompanyView}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "ViewCompany"
            component = {ViewCompany}
            options ={{headerShown: false}}
          />
           <Stack.Screen 
            name= "WebViewScreen"
            component = {WebView}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "HunterView"
            component = {HunterView}
            options ={{headerShown: false}}
          />
          <Stack.Screen 
            name= "EventNew"
            component = {EventNew}
            options ={{headerShown: false}}
          />
      </Stack.Navigator>
    );
}

export {StackLayout};