import { View, Text,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors'
import { useNavigation } from '@react-navigation/native'
export default function MidHead({title,val}) {

 const navigation=useNavigation();
  const ViewMoreHandler=()=>{
    navigation.navigate('More',{data:val});
  }



  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:18,color:'black'}}>{title}</Text>
      <Pressable onPress={ViewMoreHandler}>
        <Text style={{color:Colors.primary,fontSize:13,fontWeight:400}}>View More</Text>
      </Pressable> 
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})