import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    containersplash : {
        flex: 1,
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FADC9C',
    },
    
    textHeaderName: {
        fontSize: 25,
        marginLeft: 15,
        marginTop: 40,
        fontWeight: 'bold',
        color: '#323232'
    },
    textProfileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    picker: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    textQuestion: {
        fontSize: 25,
        marginLeft: 15,
        
    },
    imagelocation: {
        width: 20,
        height: 20,
        marginTop: 10
    },
    imagekategori: {
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft: 30
    },
    statusbukas:{
        width: 100,
        height: 30, 
        marginBottom: 10,
        backgroundColor: '#FADC9C', 
        borderRadius: 10,
        borderColor: '#000000',
    },
    ambilbukas:{
        borderColor: '#000000',
        borderWidth: 1,
        width: '50%',
        marginTop: 5,
        height: 30, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE4E4E', 
        borderRadius: 10
    },
    containerDashboard : {
        flex: 1,
        width : '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    containerProfil: {
        flex: 1,
        width : '100%',
        height: '10%',
        backgroundColor: '#fff'
    },
    flatdatabuku: {
        height :'100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#000000',
        marginTop: 5
    },
    profilScreen:{
        width: "100%",
        height: "100%",
        backgroundColor: "#FEE2E2",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    columntambahbuku: {
        marginLeft: 15,
        marginRight: 15
    },
    ROw: {
        flexDirection: 'row'
    },
    columntambahbukus: {
        
        width: '100%',
        flexDirection: 'column',
        marginLeft: 15,
        marginRight: 55
    },
    rowtambahbukus: {
        width: '40%',
        flexDirection: 'row'
    },
    InputBukuJudul:{
        margin: 10
    },
    inputBuku: {
        height :'80%',
        backgroundColor: '#D0E8F2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#000000',
        borderWidth: 1,
    },
    textlocation: {
        marginLeft: 10, 
        fontSize: 20, 
        marginTop: 10
    },
    headerDashboard : {
        width : '100%',
        height: '18%',
        flexDirection: 'column',
        backgroundColor: '#FADC9C',
        borderRadius: 1
    },
    headerProfil:{
        width : '100%',
        height: '0%',
        backgroundColor: '#fff'
    },
    headerBuKas: {
        width : '100%',
        height: '20%',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    logosplashscreen :{
        width: 400,
        height: 400,
        marginBottom: 10
    },
    textsplashscreen :{
        fontSize: 48,
        color: '#8DBF8B',
        fontWeight: 'bold',
        
    },
    containerLogin : {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: "100%",
        backgroundColor: '#fff',
        marginLeft: 30
    },
    daftarbuku: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
        width: "100%",
        backgroundColor: '#D0E8F2',
        marginTop: 20
    },
    logologinscreen :{
        width: 50,
        height: 50,
        marginRight: 10
    },
    textloginscreen :{
        fontSize: 15,
        color: '#000000',
        fontWeight:'bold'
    },
    columnemaillogin : {
        flexDirection: 'column',
        width: "90%"
    },
    profile : {
        flexDirection: 'column',
        width: "90%",
        alignItems:'flex-start',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 3
    },
    InputEmail: {
        borderColor: 'black', 
        borderWidth: 1,
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#0000',
        
    },
    InputBuku: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },

    DetailsBuku: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: "100%",
        height: "150%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#D0E8F2',
    },
    buttonbottom: {
        marginBottom: 10,
        backgroundColor:'#FADC9C',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft:30,
        marginRight: 30,
        width: "90%",
        justifyContent: 'center',
        position: 'absolute',
        bottom:0,
    },
    buttonbottomregist: {
        backgroundColor:'#FADC9C',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft:30,
        marginRight: 30,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    buttonbottomsavebuku: {
        backgroundColor:'#01C5C4',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30
    },
    buttonbottomcamera: {
        backgroundColor:'#03fca5',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    submitButton:{
        color:'#000000',
        textAlign:'center',
        fontSize: 15,
    },
    submitFoto:{
        color:'#000000',
        textAlign:'center',
        fontSize: 20,
    },
    daftarlogin: {
        flex: 0.1,
        width: "100%",
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittleacara: {
        color: '#000000', 
        fontSize: 15, 
        marginLeft:2, 
        marginTop: 5,
    },
    layanan: {
        paddingLeft:30,
        paddingTop:10
    }
})

export default style;