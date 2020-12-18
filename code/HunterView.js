import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const HunterView = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'column' }}>
            <Image
                source={require('../asset/poster.png')} />
            <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 18 }}>Event Pensi</Text>
            <Text style={{ fontSize: 15 }}>About Pensi</Text>
            <View style={{ flexDirection: 'row', marginTop: 20, width: "80%", height: "15%", backgroundColor: "#AAAAAA", borderRadius: 20, alignItems: 'center' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', flexDirection: 'row' }}>PAKET PLATINUM</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', marginRight: 60, justifyContent: 'center', width: "25%", height: 30, alignItems: 'center', backgroundColor: '#FADC9C', borderRadius: 10 }}>
                    <TouchableHighlight
                        underlayColor="#FADC9C">
                        <Text style={{ textAlign: 'center' }}>5/10</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, width: "80%", height: "15%", backgroundColor: "#FDCA14", borderRadius: 20, alignItems: 'center' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>PAKET GOLD</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', marginRight: 98, justifyContent: 'center', width: "25%", height: 30, alignItems: 'center', backgroundColor: '#FADC9C', borderRadius: 10 }}>
                <TouchableHighlight
                        underlayColor="#FADC9C">
                        <Text style={{ textAlign: 'center' }}>10/10</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default HunterView;