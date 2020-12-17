import React, { useEffect } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('LoginScreen');
        }, 5000)
    }, [navigation]);
    return(
        <View style={styles.containersplash}>
            <TouchableOpacity>  
                <Image style={styles.logosplashscreen} source={require('../asset/background.png')}/>
            </TouchableOpacity>
        </View>
    );
}

export default SplashScreen;