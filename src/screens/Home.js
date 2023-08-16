import { View, Text, StatusBar,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import MidHead from '../components/MidHead'
import CardContainer from '../components/CardContainer'
export default function Home() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Header></Header>
      <Tabs></Tabs>
      <MidHead title='Trending'></MidHead>
      <CardContainer></CardContainer>
      <MidHead title='Latest'></MidHead>
      <CardContainer val={1}></CardContainer>

    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingHorizontal:22,
    paddingBottom:22
  }
})