import React, {useState} from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';


const EditProfileHunter = () => {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    // const signUp = () => {
    //     auth()
    //     .createUserWithEmailAndPassword(state.emailaddress, state.passwordaddress)
    //     .then(() => {
    //       Alert.alert('Berhasil Membuat Akun')
    //       navigation.navigate('LoginScreen');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/email-already-in-use') {
    //         Alert.alert('Email Sudah Terdaftar')
            
    //       }
      
    //       if (error.code === 'auth/invalid-email') {
    //         Alert.alert('Alamat Email Salah')
    //       }
    //     });
    // }
    // const onAuthStateChanged= user =>{
    //     setUser(user);
    // }
    React.useEffect(()=>{
        LogBox.ignoreAllLogs();
        // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // return subscriber;
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
            <Text style={styles.textloginscreen}>Edit Profile</Text>
            
            </View>
            <View style={styles.columnemaillogin}>
            <Text style={{marginBottom: 10, color:'grey'}}>School or University Name</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholderTextColor = "#B8B8B8"
                />
            </View>
            <View style={styles.columnemaillogin}>
            <Text style={{marginBottom: 15, marginTop: 10, color:'grey'}}>Phone Number</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholderTextColor = "#B8B8B8"
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 10, color:'grey'}}>Email</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholderTextColor = "#B8B8B8"
                secureTextEntry={true} 
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15, color:'grey'}}>Username</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholderTextColor = "#B8B8B8"
                secureTextEntry={true} 
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15, color:'grey'}}>Password</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "***********" 
                placeholderTextColor = "#B8B8B8"
                />
            </View>
            <View style={styles.buttonbottomregist}>
                <TouchableHighlight 
                    underlayColor="#01C5C4"
                    onPress = {()=> navigation.navigate('ProfilScreen')}
                    >
                    <Text style={styles.submitButton}>Save</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default EditProfileHunter;