import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors'

export default function NewsList({data}) {


  if(data.urlToImage===null)
  data.urlToImage='https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000'

    if(data.title.length>35)
    data.title=data.title.slice(0,35)





  return (
    <View style={styles.container}>
     <Image style={styles.imgStyle} source={{uri:data.urlToImage}}></Image>
      <View style={styles.contContainer}>
        <Text style={styles.headline}>{data.title}</Text>
        <Text>{data.author}</Text>
      </View>
    </View>
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