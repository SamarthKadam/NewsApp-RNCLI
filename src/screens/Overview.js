import { View, Text,StyleSheet,ImageBackground,Dimensions,Pressable,Linking} from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { Link, useRoute } from '@react-navigation/native'
import { Colors } from '../../assets/fonts/colors/Colors';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const  windowWidth=Dimensions.get('window').width
export default function Overview({}) {

  const route=useRoute();
  const {data}=route.params;

  async function handlePress()
  {
    const supported=await Linking.canOpenURL(data.url);
    // if(supported)
    await Linking.openURL(data.url)
    // else
    //  Alert.alert(`Cant open this URL:${data.url}`)
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgStyle} source={{uri:data.urlToImage}}>
        <View style={styles.child}>
          <Text style={styles.headLine}>{data.title}</Text>
        </View>
        </ImageBackground>
        <View style={styles.root}>
        <View style={styles.authorcontainer}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
        <Avatar.Icon color='white' style={{backgroundColor:Colors.primary}} size={34} icon="account" />
        <Text style={styles.authorsmtext}>{data.author?data.author:'unknown'}</Text>
          </View>
        </View>
        <View>
         <Text style={styles.description}>
         {data.description?data.description:data.title}
          </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
         <Pressable onPress={handlePress}>
         <Text style={{color:Colors.primary,fontSize:16,marginTop:'2%'}}>Read More...</Text>
          </Pressable>
        </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:'100%'
  },
  imgStyle:{
    width:windowWidth,
    height:300,
    backgroundColor:'black'
  },
  child:{
    paddingHorizontal:15,
    paddingVertical:8,
    justifyContent:'flex-end',
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headLine:{
    color:'white',
    fontFamily:"serif",
    fontSize:18,
    fontWeight:'700'
  },
  authorcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'3%',
    // paddingHorizontal:'4%'
  },
  authorsmtext:{
    fontWeight:'400',
    marginLeft:'5%',
    color:'grey'
  },
  description:{
    // paddingHorizontal:'4%',
    fontSize:18,
    lineHeight:30,
    fontFamily:'serif',
    color:'grey',
    marginTop:'5%'
  },
  root:{
    paddingHorizontal:'4%'
  }
})