import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


const RegistrasiHunter = () => {
    const navigation = useNavigation();
    const [universitas, setUniversitas] = React.useState('');
    const [nomor, setNomor] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const signUp = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('Berhasil Registrasi'),
          setEmail(''),
          setPassword(''),
          setUsername(''),
          setNomor(''),
          setUniversitas('')
          navigation.navigate('LoginScreen');
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
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.containerLogin}>
            <Text style={styles.textloginscreen}>Register Hunter</Text>
            
            </View>
            <View style={styles.columnemaillogin}>
            <Text style={{marginBottom: 10, color:'grey'}}>School or University Name</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "ex: Telkom University"
                placeholderTextColor = "#B8B8B8"
                onChangeText={text => setUniversitas(text)}
                value={universitas}
                />
            </View>
            <View style={styles.columnemaillogin}>
            <Text style={{marginBottom: 15, marginTop: 10, color:'grey'}}>Phone Number</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "ex: 08210099xxx"
                placeholderTextColor = "#B8B8B8"
                onChangeText={text => setNomor(text)}
                value={nomor}
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 10, color:'grey'}}>Email</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "ex: dewi@gmail.com"
                placeholderTextColor = "#B8B8B8"
                onChangeText={text => setEmail(text)}
                value={email}
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15, color:'grey'}}>Username</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "ex: dewiiii"
                placeholderTextColor = "#B8B8B8"
                 
                onChangeText={text => setUsername(text)}
                value={username}
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15, color:'grey'}}>Password</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "*****" 
                placeholderTextColor = "#B8B8B8"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
                />
            </View>
            <View style={styles.buttonbottomregist}>
                <TouchableHighlight 
                    underlayColor="#FADC9C"
                    onPress = {signUp}
                    >
                    <Text style={styles.submitButton}>Register</Text>
                </TouchableHighlight>
            </View>
        </View>
        </ScrollView>
    );
}

export default RegistrasiHunter;