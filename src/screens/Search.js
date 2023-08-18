import { View,StyleSheet,FlatList} from 'react-native'
import React,{useCallback,useState} from 'react'
import { Searchbar } from 'react-native-paper';
import NewsList from '../components/NewsList';
import Loading from '../utils/Loading';
export default function Search() {

 const[query,setQuery]=useState(null);
 const[results,setResults]=useState([])

const  Search=useCallback(()=>
{
  fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=133657eb75dd49f89487b83170831397`).then((res)=>res.json()).then((data)=>{
    setResults((val)=>{
      let list=data.articles;

      if(list.length<12)
      list=list.slice(0,list.length)
      else
      list=list.slice(0,12);

      return list;
    })

    console.log("not every time");
  })
},[query])

console.log("this is results lenght")
console.log(results.length);

 const inputHandler=(text)=>{
  setQuery(text);
 }

  return (
    <View style={styles.container}>
    <Searchbar
    style={styles.searchelem}
    placeholderTextColor='grey'
    placeholder="Search News"
    onChangeText={inputHandler}
    onIconPress={Search}
    />
    {(results.length>0&&<FlatList data={results} renderItem={(itemData,index)=>{
      return (<NewsList id={index} data={itemData.item}></NewsList>)
    }}>
    </FlatList>)}
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        paddingHorizontal:20,
    },
    searchelem:{
        marginTop:'2%',
        backgroundColor:'#F5F5F5',
        marginBottom:'5%'
    }
})