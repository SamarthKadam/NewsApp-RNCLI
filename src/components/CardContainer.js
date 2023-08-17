import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import Card from './Card';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

export default function CardContainer({val}) {

  const data=useSelector((store)=>store.data);

  console.log("this are the values")
  console.log(data.All?.length);
  console.log(data.Business?.length);
  console.log(data.Crypto?.length);
  console.log(data.Technology?.length);
  console.log(data.nature?.length);


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