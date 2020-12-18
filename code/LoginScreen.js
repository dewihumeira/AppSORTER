import React, {useState} from 'react';
import {Text, View, Image, TextInput,TouchableHighlight, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import Gap from './Gap';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
{
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const signIn = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Berhasil Login'),
          setEmail(''),
          setPassword('')
          navigation.navigate('BottomTab');
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            Alert.alert('Email Tidak Terdaftar')       
            
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Alamat Email Salah')
          }
          console.error(error);
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Password Salah')
          }
          console.error(error);
        });
    }
   
   React.useEffect(()=>{
       LogBox.ignoreAllLogs();
   },[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={require('../asset/logo.png')}/>
                <Text style={styles.textloginscreen}>Login</Text>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, color:'grey'}}>email address</Text>
                <TextInput 
                    style={styles.InputEmail} 
                    placeholder = "ex: dewihumeira@gmail.com"
                    placeholderTextColor = "#B8B8B8"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15, color:'grey'}}>password</Text>
                <TextInput 
                    style={styles.InputEmail} 
                    placeholder = "*****" 
                    placeholderTextColor = "#B8B8B8"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
            </View>
            
            <View style={styles.buttonbottom}>
                <TouchableHighlight 
                    underlayColor="#FADC9C"                    
                    onPress = {signIn}
                    > 
                    <Text 
                        style={styles.submitButton}>Login</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.daftarlogin}>
            <Text>Don’t have an account?</Text>
            <Gap height={20}/>
            <Text onPress = {()=> navigation.navigate('RegistrasiHunter')} style={{color: '#F09E56', fontSize: 16}}>Register</Text>
          
            </View>
        </View>
    );
}
}

export default LoginScreen;