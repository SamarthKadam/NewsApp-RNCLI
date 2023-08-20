import { View,StyleSheet,FlatList} from 'react-native'
import React,{useCallback,useRef,useState} from 'react'
import { Searchbar } from 'react-native-paper';
import NewsList from '../components/NewsList';
import Loading from '../utils/Loading';
export default function Search() {

 const[query,setQuery]=useState(null);
 const[isloading,setIsLoading]=useState(false);
 const[results,setResults]=useState([])
 const inputref=useRef()

const  Search=useCallback(()=>
{
  setIsLoading(true);
  fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=133657eb75dd49f89487b83170831397`).then((res)=>res.json()).then((data)=>{

    setIsLoading(false);
    setResults((val)=>{
      let list=data.articles;

      if(list.length<20)
      list=list.slice(0,list.length)
      else
      list=list.slice(0,20);

      return list;
    })
  })
},[query])


 const inputHandler=(text)=>{
  setQuery(text);
 }

  return (
    <View style={styles.container}>
    <Searchbar
    onSubmitEditing={Search}
    style={styles.searchelem}
    placeholderTextColor='grey'
    placeholder="Search News"
    onChangeText={inputHandler}
    onIconPress={Search}
    ref={inputref}
    onLayout={()=>{inputref.current.focus()}}
    />
    {(results.length>0&&isloading===false&&<FlatList data={results} renderItem={(itemData,index)=>{
      return (<NewsList id={index} data={itemData.item}></NewsList>)
    }}>
    </FlatList>)}
    {isloading&&<Loading></Loading>}
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        paddingHorizontal:10,
    },
    searchelem:{
        marginTop:'2%',
        backgroundColor:'#F5F5F5',
        marginBottom:'5%',
        color:'black'
    }
})