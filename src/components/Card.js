import { View, Text,StyleSheet,Image,Pressable} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors';
import { useNavigation } from '@react-navigation/native';
export default function Card({val}) {

  const navigation=useNavigation();
  let title=val.title;

  if(val.urlToImage===null)
  {
    val.urlToImage='https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000'
  }
  let issliced=0;
  if(title.length>70)
  {

    title=title.slice(0,80);
    issliced=1;
  }
  if(val.author?.length>25)
  {
    val.author=val.author.slice(0,25)
  }

  function handlePress()
  {
    navigation.navigate('Overview',{data:val});
  }


    return (
        <Pressable style={styles.container} android_ripple={{color:"rgba(0, 0, 0, .12)"}} onPress={handlePress}>
      <View>
        <Image style={styles.imgsetting} source={{uri:val.urlToImage}}></Image>
      <Text style={styles.boldText}>{title}{issliced?'....':''}</Text>
      <View style={styles.bcontainer}>
        <Text style={styles.smText}>World</Text>
        <Text style={styles.smText}>{val.author?val.author:'unknown'}</Text>
      </View>
      </View>
      </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        // width:'65%',
        width:215,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        overflow:'hidden',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
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