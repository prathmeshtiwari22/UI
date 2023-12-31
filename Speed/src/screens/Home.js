import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Home = (props) => {
 let [fontsLoaded] = useFonts({
   Montserrat_400Regular,
   Montserrat_600SemiBold,
   Montserrat_700Bold
 });
 const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>Sharvesh Scooter</Text>
      <Text style={styles.detail}>
        With its sleek design and eco-friendly performance, this scooter
        delivers a smooth and enjoyable ride, making every journey a convenient
        and enjoyable experience.
      </Text>
      <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Detail")}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#121212'
    },
    img:{
        height:"50%",
        width:'120%',
        resizeMode:'contain',
    },
    title:{
        color:'#FFF',
        fontFamily:'Montserrat_700Bold',
        fontSize:30,
        marginTop:20
    },
    detail:{
        color:'#fff',
        fontFamily:'Montserrat_400Regular',
        fontSize:18,
        textAlign:'center',
        paddingHorizontal:20,
        lineHeight:30,
        marginTop:30
    },
    btn:{
        marginTop:80,
        backgroundColor:'#E24438',
        paddingHorizontal:140,
        paddingVertical:10,
        borderRadius:30
    },
    text:{
        fontFamily:'Montserrat_600SemiBold',
        fontSize:30,
        color:'#FFF'
    }
})