import { View, Text,StatusBar,StyleSheet,Dimensions} from 'react-native'
import React,{useState}from 'react'
import Header from './Header'
import Tabs from './Tabs'
import MidHead from './MidHead'
import CardContainerTop from './CardContainerTop'
import CardContainerBottom from './CardContainerBottom'

const windowHeight = Dimensions.get('window').height;
let value=Math.round(windowHeight)
let firstHalf=null;
let secondHalf=null;
export default function HomeComponent({value}) {

    if(value)
    {
        firstHalf=value.slice(0,6);
        secondHalf=value.slice(6,12)
    }


  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content"></StatusBar>
    <Header ishome={true}></Header>
    <Tabs></Tabs>
    <MidHead key={1} title='Trending'></MidHead>
    <CardContainerTop data={firstHalf}></CardContainerTop>
    <MidHead key={2} title='Latest'></MidHead>
    <CardContainerBottom data={secondHalf}></CardContainerBottom>
  </View>
  )
}
const styles=StyleSheet.create({
    container:{
      backgroundColor:'white',
      paddingHorizontal:22,
      paddingBottom:22,
      height:value,
    }
  })