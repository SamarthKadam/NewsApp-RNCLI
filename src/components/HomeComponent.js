import { View, Text,StatusBar,StyleSheet,Dimensions} from 'react-native'
import React,{useState}from 'react'
import Header from './Header'
import Tabs from './Tabs'
import MidHead from './MidHead'
import { useSelector } from 'react-redux'
import CardContainer from './CardContainer'

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
    <Header></Header>
    <Tabs></Tabs>
    <MidHead key={1} title='Trending'></MidHead>
    <CardContainer key={1} data={firstHalf}></CardContainer>
    <MidHead key={2} title='Latest'></MidHead>
    <CardContainer key={2} data={secondHalf}></CardContainer>
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