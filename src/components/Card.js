import { View, Text,StyleSheet,Image,Pressable} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors';
import { useNavigation } from '@react-navigation/native';
export default function Card({val}) {

  const navigation=useNavigation();

  if(val.urlToImage===null)
  {
    val.urlToImage='https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000'
  }
  let issliced=0;
  if(val.title.length>70)
  {
    val.title=val.title.slice(0,90)
    issliced=1;
  }


  function handlePress()
  {
    navigation.navigate('Overview',{data:val});
  }





    return (
        <Pressable style={styles.container} android_ripple={{color:"rgba(0, 0, 0, .12)"}} onPress={handlePress}>
      <View>
        <Image style={styles.imgsetting} source={{uri:val.urlToImage}}></Image>
      <Text style={styles.boldText}>{val.title}{issliced?'......':''}</Text>
      <View style={styles.bcontainer}>
        <Text style={styles.smText}>World</Text>
        <Text style={styles.smText}>{val.author}</Text>
      </View>
      </View>
      </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        // width:'65%',
        width:215,
        height:180,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        overflow:'hidden',
        borderRadius:10,
        paddingHorizontal:4,
        paddingVertical:4,
        backgroundColor:Colors.light,
    },
    imgsetting:{
        height:100,
        width:200,
        alignSelf:'center',
        borderRadius:10
    },
    bcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
    },
    boldText:{
      marginTop:5,
      fontSize:13,
      color:'black',
      fontWeight:'bold',
    },
    smText:{
      fontSize:10,
      color:'grey'
    }
})