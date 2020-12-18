import React, {useState} from 'react';
import {Text, View,FlatList,SafeAreaView,Image, ScrollView, Alert, LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const ViewCompany = ()=>{ 
    const navigation = useNavigation();
  
      return (
 
        
          <View style={{alignItems: 'center'}}>          
            <Image 
              style={{marginTop: 10}} 
              source={require('../asset/TelkomselLogo.png')}/>
            <View>
            <Text style={{textAlign:'center'}}>PT Telekomunikasi Selular</Text>
            <Text style={{textAlign:'center'}}>www.telkomsel.com</Text>
            <Text style={{textAlign:'center'}}>021-34222394</Text>
            </View>

            <View style={styles.profile}>
                <Text style={{marginBottom: 5, color:'grey', marginLeft:20, marginTop:10}}>Visi</Text>
                <Text style={{color:'black', marginLeft: 20}}>Menjadi penyedia layanan dan solusi gaya hidup digital mobile kelas dunia yang terpercaya.</Text>
                <Text style={{marginBottom: 5, color:'grey', marginLeft:20, marginTop:30}}>Misi</Text>
                <Text style={{color:'black', marginLeft: 20}}>Memberikan layanan dan solusi digital mobile yang melebihi ekspektasi para pengguna, menciptakan nilai lebih bagi para pemegang saham serta mendukung pertumbuhan ekonomi bangsa.</Text>
                <Text style={{marginBottom: 5, color:'grey', marginLeft:20, marginTop:30}}>Tentang</Text>
                <Text style={{color:'black', marginLeft: 20, marginBottom:10}}>Berkenalan lebih dekat dengan para pemimpin yang terus berupaya memenuhi tata kelola perusahaan dalam meningkatkan transparansi, akuntabilitas, tanggung jawab, independensi, dan keadilan.</Text>
            </View>
        </View>

        
      );
    }
  
  
    export default ViewCompany;