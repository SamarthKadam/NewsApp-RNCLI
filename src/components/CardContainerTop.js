import { View, Text,StyleSheet} from 'react-native'
import React,{useRef,useEffect} from 'react'
import Card from './Card';
import { ScrollView } from 'react-native';
import Loading from '../utils/Loading';
export default function CardContainerTop({data}) {

  const scrollRef=useRef();
  useEffect(()=>{
    scrollRef.current?.scrollTo({x:0,animated:true})
  },[data])


  return (
      <ScrollView ref={scrollRef} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scroll}>
    <View style={styles.container}>
      {data.length===0&&<Loading></Loading>}
      {data.length>0&&data.map((val,id)=>{
      return <Card key={val.url} val={val}></Card>
      })}
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