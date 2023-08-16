import { View,StyleSheet} from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Colors } from '../../assets/fonts/colors/Colors';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Header() {

  const data=useSelector((data)=>data.count.count);
  console.log(data);
    const date=new Date();



  return (
    <View>
    <Appbar.Header>
       <Appbar.Content titleStyle={{color:Colors.primary,fontWeight:'700',fontSize:26,fontFamily:"Roboto"}} title="News" />
       <Appbar.Action size={30} icon="bell-ring-outline"  onPress={()=>{}} />
    </Appbar.Header>
    <Text style={styles.dateelem}>Today,{monthNames[date.getMonth()]}{date.getDate()}th</Text>
    <Searchbar
    style={styles.searchelem}
    placeholderTextColor='grey'
      placeholder="Search News"
      onChangeText={()=>{}}
    />
    </View>
  )
}
const styles=StyleSheet.create({
    dateelem:{
        marginLeft:'5%',
        color:'grey'
    },
    searchelem:{
        marginTop:'4%',
        backgroundColor:'#F5F5F5'
    }
})