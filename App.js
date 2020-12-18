import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackLayout} from './code/StackLayout';
import {LogBox} from 'react-native';
import firebase from "@react-native-firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARa173A0I3ndMVmyttVZthtUU2pkjWOEQ",
  authDomain: "sorter-fecec.firebaseapp.com",
  projectId: "sorter-fecec",
  storageBucket: "sorter-fecec.appspot.com",
  messagingSenderId: "1018842300025",
  appId: "1:1018842300025:web:72541f3967048d23ad5ea8",
  measurementId: "G-19XS2BJ17J"
};
if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }

const App = () => {
  React.useEffect(()=>{
    LogBox.ignoreAllLogs();
},[])
  return (
    <NavigationContainer>
      <StackLayout />
    </NavigationContainer>
  );
  }

export default App;
