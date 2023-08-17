import { View, Text,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Winwidth=Dimensions.get('window').width
const value=Winwidth-20;

export default function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:value,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})