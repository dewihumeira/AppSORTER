import React, {useState} from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';


const EventNew = () => {
    React.useEffect(()=>{
        LogBox.ignoreAllLogs();
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
            <Text style={styles.textloginscreen}>New Event</Text>
            
            </View>
            <View style={styles.columnemaillogin}>
            <Text style={{marginBottom: 10, color:'grey'}}>Event Name</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "ex: Pentas Seni SMKN 8 Bandung"
                placeholderTextColor = "#B8B8B8"
                />
            </View>
            <View style={styles.columnemaillogin}>
            <Text style={{marginBottom: 15, marginTop: 10, color:'grey'}}>School or University Name</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "ex: SMKN 8 Bandung"
                placeholderTextColor = "#B8B8B8"
                />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 10, color:'grey'}}>Description Your Event</Text>
                <TextInput 
                style={styles.InputEmail}/>
                <Text style={{marginBottom: 10, marginTop: 10, color:'black'}}>Upload Your Poster Event</Text>
                <View style={{width: "100%", alignItems: 'center'}}>
                <Image 
            style={{marginTop:0, alignItems: 'center'}} 
            source={require('../asset/uploadimage.png')}/>
            </View>
            </View>
            <View style={styles.buttonbottomregist}>
                <TouchableHighlight 
                    underlayColor="#FADC9C"
                    onPress = {()=> navigation.goBack()}
                    >
                    <Text style={styles.submitButton}>Add Event</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default EventNew;