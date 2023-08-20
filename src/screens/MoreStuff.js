import { View, Text,StyleSheet,FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { category } from '../helper/Category'
import NewsList from '../components/NewsList'
import { useRoute } from '@react-navigation/native'
export default function MoreStuff() {

    const route=useRoute();
    const {data}=route.params;
    const fdata=useSelector(state=>state.data)
    const active=useSelector((store)=>store.data.activeTab);
    const array=fdata[category[active]];
    console.log(array.length)
    console.log(data);
    const values=array.slice(data*10,data*10+10)
    console.log(values);

  return (
    <View style={styles.container}>
    <FlatList data={values} renderItem={(itemData,index)=>{
      return (<NewsList id={index} data={itemData.item}></NewsList>)
    }}>
    </FlatList>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
    },
})