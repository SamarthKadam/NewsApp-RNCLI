import { View,StyleSheet,Alert} from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Colors } from '../../assets/fonts/colors/Colors';
import { useNavigation } from '@react-navigation/native';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Header({ishome}) {

   const navigation=useNavigation();
    const date=new Date();

    function touched()
    {
      if(ishome==true)
      {
        navigation.navigate("Search");
      }
    }




  return (
    <View>
    <Appbar.Header style={{backgroundColor:'white'}}>
       <Appbar.Content titleStyle={{color:Colors.primary,fontWeight:'700',fontSize:26,fontFamily:"Roboto"}} title="News" />
       <Appbar.Action size={30} icon="bell-ring-outline"  onPress={()=>{Alert.alert('All caught up ✅')}} />
    </Appbar.Header>
    <Text style={styles.dateelem}>Today,{monthNames[date.getMonth()]}{date.getDate()}th</Text>
    <Searchbar
    style={styles.searchelem}
    placeholderTextColor='grey'
    placeholder="Search News"
    onTouchStart={touched}
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
        marginTop:'2%',
        backgroundColor:'#F5F5F5'
    }
})