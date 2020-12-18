import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackLayout} from './code/StackLayout';
import {LogBox} from 'react-native';
import firebase from '@react-native-firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAWli2eIX0-ZU0-pfz5w0nisgVUozvF1pM",
  authDomain: "sorter-e4382.firebaseapp.com",
  projectId: "sorter-e4382",
  storageBucket: "sorter-e4382.appspot.com",
  messagingSenderId: "615648626439",
  appId: "1:615648626439:web:4abe48fb681762bdb727a2",
  measurementId: "G-LX9VT5EMHV"
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