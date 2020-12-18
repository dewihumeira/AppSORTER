import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackLayout} from './code/StackLayout';
import {LogBox} from 'react-native';


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
