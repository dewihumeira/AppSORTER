import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight,Image } from 'react-native';

function ChooseRegistrasi({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.35);

  return (
    <>
    
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Text style={styles.title}>who are u?</Text>
          {/* <Gap height={19}/>
          <Button title="HUNTER" onPress={() => navigation.replace('SignInHunter')}/>
          <Gap height={30}/>
          <Button title="COMPANY" onPress={() => navigation.replace('SignInCompany')}/> */}
           <View style={styles.buttonbottom}>
              <TouchableOpacity>
                <TouchableHighlight underlayColor="#FADC9C">
                    <Text onPress = {()=> navigation.replace('LoginScreen')} style={styles.submitButton}>Hunter</Text>
                </TouchableHighlight>
              </TouchableOpacity>
            </View>
            <Text style={styles.or}>or</Text>
            <View style={styles.buttonbottom}>
           
              <TouchableOpacity>
                <TouchableHighlight underlayColor="#FADC9C" onPress = {()=> navigation.navigate('ButtomTabCompany')}>
                    <Text style={styles.submitButton}>Company</Text>
                </TouchableHighlight>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}

export default ChooseRegistrasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#FCF1D8"
  },
  buttonbottom: {
    flexDirection: 'row',
    backgroundColor:'#FADC9C',
    borderRadius:15,
    borderColor: '#fff',
    width: 290,
    height:60,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15
},
logo: {
marginLeft: 10,
 height: 40,
 width: 35,
},
or:{
  textAlign: 'center'
},
  submitButton:{
    color:'#000000',
    textAlign:'center',
    fontSize: 15,
    marginLeft:115,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body:(width)=> ({
    paddingTop: width
  }),
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center"
  },
});

