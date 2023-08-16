import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import Card from './Card';
import { ScrollView } from 'react-native';

export default function CardContainer({val}) {


  function getData()
  {
    let value;
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=5168839b926d49db9fb9cef9792190e7').then((res)=>res.json()).then((data)=>{
      value=data.articles;
      value.length-=88;
      console.log(value);
    });
  }

  // getData();

  return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scroll}>
    <View style={styles.container}>
      <Card val={val}></Card>
      <Card val={val}></Card>
      <Card val={val}></Card>
    </View>
      </ScrollView>
  )
}

const styles=StyleSheet.create({
    container:{
      flexDirection:'row',
      alignItems:'flex-start'
    },
    scroll:{
      marginTop:'4%',
      width:'95%',
    }
})