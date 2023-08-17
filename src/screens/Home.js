import { View, Text, StatusBar,StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import MidHead from '../components/MidHead'
import CardContainer from '../components/CardContainer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { category } from '../helper/Category'
import { AllNews,getNews} from '../helper/Api'
import { checkPresent } from '../helper/checkP'
import { setAll,setBusiness,setCrypto,setNature,setTechnology } from '../redux/actions/operateAction'

export default function Home() {


  const data=useSelector((store)=>store.data.activeTab);
  const dispatch=useDispatch();
  const fdata=useSelector((store)=>store.data);
  
  
  useEffect(()=>{
    
    let type=category[data];
    let url;
    if(type==="All")
    {
      url=AllNews();
    }
    else{
      url=getNews(type);
    }
    let isAvail=checkPresent(type,fdata);
    console.log(isAvail);
    if(isAvail===true)
    return;

    fetch(url).then((res)=>res.json()).then((data)=>{
      let fetched=data.articles;
      console.log("http request done");
      if(type==="All")
      dispatch(setAll(fetched));
      else if(type==='Business')
      dispatch(setBusiness(fetched));
      else if(type==='Crypto')
      dispatch(setCrypto(fetched));
      else if(type==='Technology')
      dispatch(setTechnology(fetched));
      else if(type==='Nature')
      dispatch(setNature(fetched));
    }).catch((err)=>{
      console.log(err);
    })
  },[data])





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