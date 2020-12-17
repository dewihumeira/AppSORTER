import React, {useState} from 'react';
import {Text, View,FlatList,SafeAreaView,Image, ScrollView, Alert, LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ProfilScreen = ()=>{ 
    const navigation = useNavigation();
  
      return (
        <View style={styles.containerDashboard}>
          <View style={styles.headerProfil}></View>
          <View style={{alignItems: 'center'}}>          
            <Image 
              style={{marginTop: 10}} 
              source={require('../asset/profileuser.png')}/>
            <View style={{backgroundColor: '#01C5C4', marginTop: 20,marginBottom: 10, justifyContent: 'center', padding: 10, borderRadius: 10}}>
              <TouchableHighlight underlayColor="#01C5C4" onPress={()=> navigation.navigate('EditProfileHunter')}>
                <Text style={styles.submitButton}>Edit Profile</Text>
              </TouchableHighlight>
            </View>
  
  
            <View style={styles.profile}>
                  <Text style={{marginBottom: 5, color:'grey', marginLeft: 10}}>username</Text>
                  <Text style={{color:'black', marginLeft: 10}}>Dewi</Text>
              </View>
              <View style={styles.profile}>
                  <Text style={{marginBottom: 5, color:'grey', marginLeft: 10}}>Phone Number</Text>
                  <Text style={{color:'black', marginLeft: 10}}>+6281233467</Text>
              </View>
              <View style={styles.profile}>
                  <Text style={{marginBottom: 5, color:'grey', marginLeft: 10}}>School or Universityr</Text>
                  <Text style={{color:'black', marginLeft: 10}}>Telkom University</Text>
              </View>
              <View style={styles.profile}>
                  <Text style={{marginBottom: 5, color:'grey', marginLeft: 10}}>Student ID</Text>
                  <Text style={{color:'black', marginLeft: 10}}>1101116263</Text>
              </View>
              <View style={styles.profile}>
                  <Text style={{marginBottom: 5, color:'grey', marginLeft: 10}}>Email</Text>
                  <Text style={{color:'black', marginLeft: 10}}>dew@gmail.com</Text>
              </View>
              <View style={{backgroundColor: '#C4C4C4', marginTop: 3, justifyContent: 'center', padding: 10, borderRadius: 40, marginLeft:300}}>
              <Image 
              style={{marginTop: 1}} 
              source={require('../asset/new.png')}/>
              <TouchableHighlight underlayColor="#01C5C4" onPress={()=> navigation.navigate('EditProfileHunter')}>
                
              </TouchableHighlight>
    
            </View>
          </View>
          </View>  
        
      );
    }
  
  
    export default ProfilScreen;