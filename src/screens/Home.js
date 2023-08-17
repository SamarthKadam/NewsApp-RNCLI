
import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { category } from '../helper/Category'
import { AllNews,getNews} from '../helper/Api'
import { checkPresent } from '../helper/checkP'
import HomeComponent from '../components/HomeComponent'
import { setAll,setBusiness,setCrypto,setNature,setTechnology } from '../redux/actions/operateAction'
export default function Home() {

  const dispatch=useDispatch();
  const data=useSelector((store)=>store.data.activeTab);
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
    if(isAvail===true)
    return;

    fetch(url).then((res)=>res.json()).then((data)=>{
      let fetched=data.articles;
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
    <HomeComponent value={fdata[category[data]]}></HomeComponent>
  )
}