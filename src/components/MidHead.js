import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors'

export default function MidHead({title}) {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:18,color:'black'}}>{title}</Text>
      <Text style={{color:Colors.primary,fontSize:13,fontWeight:400}}>View More</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:'2%',
        justifyContent:'space-between'
    }
})