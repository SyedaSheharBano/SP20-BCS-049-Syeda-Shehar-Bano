import React, { startTransition } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
export default Home=({})=>{
    return(
        <view style={styles.container}>
            <Text style={styles.logoStyle}>ludo classic</Text>
            <TouchableOpacity style={styles.newGameButton}> <Text> New Game</Text></TouchableOpacity>
            <ImageBackground
      source={require("../assets/logo.png")} style={{ width: 200, height: 200 }}/>
        </view>
    )
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#ff0',
    },
    logoStyle:{
        color:'#f00',
        fontSize:40,
        alignSelf:'center',
        marginTop:100,
        fontWeight:'bold'
    },
    newGameButton:{
        backgroundColor:'#fff',
        width:200,
        padding:10,
        borderColor:'#ddd',
        borderWidth:2,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        alignItems:'center',
        elevation:4,
    },
    ImageStyle:{
        width:'70%',
        height:'70%',
        resizeMode:'contain',
        alignself:'center',
    }

})