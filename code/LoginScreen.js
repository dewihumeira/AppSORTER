import React, {useState} from 'react';
import {Text, View, Image, TextInput,TouchableHighlight, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import Gap from './Gap';


const LoginScreen = () => {
{
    const navigation = useNavigation();
    //const [username, setUsername] = React.useState('');
    //const [password, setPassword] = React.useState('');
    //const signIn = () => {
        //auth()
    //.signInWithEmailAndPassword(state.emailaddress, state.passwordaddress)
    //.then(() => {
    //Alert.alert('Selamat Datang')
    //navigation.navigate('ButtomTabBuKas');
    //})
    //.catch(error => {
    ///if (error.code === 'auth/user-not-found') {
    //Alert.alert('Email Tidak Terdaftar')        
            
    //}
    //if (error.code === 'auth/invalid-email') {
    //Alert.alert('Alamat Email Salah')
   // }
    //console.error(error);
    //if (error.code === 'auth/wrong-password') {
    //Alert.alert('Password Salah')
    //}
    //console.error(error);
   //});
    //}
    //const onAuthStateChanged= user =>{
    //setUser(user);
    //}
    //React.useEffect(()=>{
        //LogBox.ignoreAllLogs();
        //const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      //  return subscriber;
    //},[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={require('../asset/logo.png')}/>
                <Text style={styles.textloginscreen}>Login</Text>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, color:'grey'}}>email or username</Text>
                <TextInput 
                    style={styles.InputEmail} 
                    placeholder = "ex: dewihumeira@gmail.com"
                    placeholderTextColor = "#B8B8B8"
                    />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15, color:'grey'}}>password</Text>
                <TextInput 
                    style={styles.InputEmail} 
                    placeholder = "***********" 
                    placeholderTextColor = "#B8B8B8"
                    secureTextEntry={true}
                    />
            </View>
            
            <View style={styles.buttonbottom}>
                <TouchableHighlight 
                    underlayColor="#FADC9C"                    
                    onPress = {()=> navigation.navigate('ButtomTab')}
                    > 
                    <Text 
                        style={styles.submitButton}>Login</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.daftarlogin}>
            <Text>Don’t have an account?</Text>
            <Gap height={20}/>
            <Text onPress = {()=> navigation.navigate('ChooseRegistrasi')} style={{color: '#F09E56', fontSize: 16}}>Register</Text>
          
            </View>
        </View>
    );
}
}

export default LoginScreen;