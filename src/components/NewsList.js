import { View, Text,StyleSheet,Image, Pressable} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors'
import { useNavigation } from '@react-navigation/native'

export default function NewsList({data}) {
  const navigation=useNavigation();
  let isSliced=0;
  if(data.urlToImage===null)
  data.urlToImage='https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000'

  if(data.title.length>30)
  {
    data.title=data.title.slice(0,30)
    isSliced=1;
  }

  const PressHandler=()=>{
    navigation.navigate('Overview',{data:data})
  }





  return (
    <Pressable onPress={PressHandler}>
    <View style={styles.container}>
     <Image style={styles.imgStyle} source={{uri:data.urlToImage}}></Image>
      <View style={styles.contContainer}>
        <Text style={styles.headline}>{data.title}{isSliced?'...':null}</Text>
        <Text style={{color:'grey',fontSize:12}}>{data.author?data.author:'unknown'}</Text>
      </View>
    </View>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:Colors.light,
        paddingHorizontal:12,
        paddingVertical:20,
        borderRadius:20,
        marginBottom:'2%'
        },
    imgStyle:{
        height:40,
        width:70,
    },
    headline:{
        color:'black',
        fontWeight:'600'
    },
    contContainer:{
        marginLeft:'2%'
    }
})