import React, {useState} from 'react';
import {Text, View,FlatList,SafeAreaView,Image, ScrollView, Alert, LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';


const DATAEVENT = [
  {
  id: '1',
  title: 'ASTERISK',
  email: 'xxxxx@gmail.com',
  nomor: '+6281324116798'
},
{
  id: '2',
  title: 'GATHRAK',
  email: 'xxxxx@gmail.com',
  nomor: '+6281324116798',
},
{
  id: '3',
  title: 'GRAVITATION',
  email: 'xxxxx@gmail.com',
  nomor: '+6281324116798',
},
{
  id: '4',
  title: 'SYUKURAN',
  email: 'xxxxx@gmail.com',
  nomor: '+6281324116798',
},
{
  id: '5',
  title: 'PENSI',
  email: 'xxxxx@gmail.com',
  nomor: '+6281324116798',
},
{
    id: '6',
    title: 'BIRTHDAY',
    email: 'xxxxx@gmail.com',
    nomor: '+6281324116798',
  },
  {
    id: '7',
    title: 'SENI',
    email: 'xxxxx@gmail.com',
    nomor: '+6281324116798',
  },
  {
    id: '8',
    title: 'PENSI',
    email: 'xxxxx@gmail.com',
    nomor: '+6281324116798',
  },
  {
    id: '9',
    title: 'KONSER',
    email: 'xxxxx@gmail.com',
    nomor: '+6281324116798',
  },
];

const DATACOMPANY = [
  {
    id: '1',
    title: 'TELKOMSEL',
    email: 'Telkomsel@gmail.com',
    nomor: '+6281324116798'
  },
  {
    id: '2',
    title: 'TELKOMSEL',
    email: 'Telkomsel@gmail.com',
    nomor: '+6281324116798',
  },
  {
    id: '3',
    title: 'TELKOMSEL',
    email: 'Telkomsel@gmail.com',
    nomor: '+6281324116798',
  },
  {
    id: '4',
    title: 'TELKOMSEL',
    email: 'Telkomsel@gmail.com',
    nomor: '+6281324116798',
  },
  {
    id: '5',
    title: 'TELKOMSEL',
    email: 'Telkomsel@gmail.com',
    nomor: '+6281324116798',
  },
  {
      id: '6',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
      id: '7',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
      id: '8',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
      id: '9',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
];
const Item = ({id, title, email, nomor}) => {
  const navigation = useNavigation();
  return(  
  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', flexWrap: 'wrap'}}>
    <Image 
      style={{margin:10, width: 50, height:50 }} 
      source={require('../asset/acara.png')}/>
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.tittleacara}>{title}</Text>
      <View style={styles.statusbukas}>
        <Text 
          style={{color: '#000000', fontSize: 15, marginLeft:35, marginTop: 5 }}
          onPress = {()=> navigation.navigate('CompanyView')}
          >View</Text>
        </View>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', }}></View>
    <Image 
      style={{margin:10, width: 50, height:50 }} 
      source={require('../asset/acara.png')}/>
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.tittleacara}>{title}</Text>
      <View style={styles.statusbukas}>
        <Text 
          style={{color: '#000000', fontSize: 15, marginLeft:35, marginTop: 5 }}
          onPress = {()=> navigation.navigate('CompanyView')}
          >View</Text>
        </View>
    </View>
  </View>
  
);
}

const DashboardScreen = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.containerDashboard}>
      <View style={styles.headerDashboard}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textHeaderName}>{'Dashboard Event'}</Text>
          <View style={{width: '50%', flexDirection: 'row-reverse'}}>
          <Image style={{marginTop:48, marginRight:50}}
          source={require('../asset/listoption.png')}>
          </Image>
          </View>          
        </View>        
        <View style={{flexDirection: 'row', width: '100%',marginLeft: 15, marginTop: 10}}>
          <View style={{width: '100%', marginLeft: 10}}>
          </View>
          <View style={{width: '100%', marginLeft: 10}}>
          </View>
        </View>
      </View>
      <View style={styles.flatdatabuku}>        
          <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10, marginLeft: 15, marginBottom: 5}}>Post Terbaru</Text>  
          <ScrollView>    
            <SafeAreaView>
                <FlatList
                  data={DATAEVENT}
                  renderItem={({ item }) => 
                    <Item 
                      title={item.title}
                      post={item.post}
                      kategori = {item.kategori} 
                      karya = {item.karya} />
                  }
                />
              </SafeAreaView>
          </ScrollView>    
        </View>  
    </View>
    );
}

const ItemCompany = ({title, email, nomor}) => {
  const navigation = useNavigation();
  return(
  <View style={{flexDirection: 'row', marginLeft: 20}}>
    <View style={{flexDirection: 'column',}}>
      <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      <Text style={{fontSize: 14,}}>{email}</Text>
      <Text style={{fontSize: 14, color : '#F09E56'}}>{nomor}</Text>
    </View>   
    <View style={{flexDirection: 'row-reverse', width: '55%', marginTop: 15}}>
        <View style={{flexDirection: 'column'}}>
          <Image 
              style={{width: 80, height: 80,marginRight: 10}} 
              source={require('../asset/telkomsel.png')}/>
          <View style={{marginTop: 5,marginBottom: 10, backgroundColor: "#FADC9C", marginRight: 10, borderRadius: 10}}>
              <TouchableHighlight 
                  onPress={()=> navigation.navigate('ViewCompany')}
                  underlayColor="#FADC9C">
                  <Text style={{textAlign: 'center'}}>View</Text>
              </TouchableHighlight>
          </View>            
        </View>
    </View>   
  </View>  
);
}

const ListCompany = ({title, email, nomor}) =>{
  const navigation = useNavigation();
  React.useEffect(()=>{
    LogBox.ignoreAllLogs();
},[])
    return(
    <View style={{flexDirection: 'row', marginLeft: 20}}>
      <View style={{flexDirection: 'column',}}>
        <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
        <Text style={{fontSize: 14,}}>{email}</Text>
        <Text style={{fontSize: 14, color : '#F09E56'}}>{nomor}</Text>
      </View>   
      <View style={{flexDirection: 'row-reverse', width: '100%', marginTop: 15}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{marginBottom: 10, backgroundColor: "#FFFFFF", marginRight: 15, borderRadius: 10}}>
                <TouchableHighlight 
                    onPress={()=> navigation.navigate('ViewCompany')}
                    underlayColor="#FADC9C">
                </TouchableHighlight>
                 <View>
            <ScrollView>    
            <SafeAreaView>
                <FlatList
                  data={DATACOMPANY}
                  renderItem={({ item }) => 
                    <ItemCompany 
                      title={item.title}
                      email={item.email}
                      nomor = {item.nomor}/>
                  }
                />
              </SafeAreaView>
          </ScrollView>    
        </View>
            </View>            
          </View>
      </View>   
    </View>  
  );
  }


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
            <TouchableHighlight underlayColor="#01C5C4" onPress={()=> Alert.alert('New Event')}>
            </TouchableHighlight>
  
          </View>
        </View>
        </View>  
      
    );
  }


  export{DashboardScreen, ProfilScreen, ListCompany}