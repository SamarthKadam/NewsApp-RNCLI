import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Chip } from 'react-native-paper'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setTab } from '../redux/actions/operateAction'

export default function Tabs() {

    const dispatch=useDispatch();
    const [activeTab,setActiveTab]=useState([true,false,false,false,false]);

    function TabHandler(value)
    {
        let tabval=[false,false,false,false,false];
        tabval[value]=true;
        setActiveTab(tabval);
        dispatch(setTab(value));
    }

    return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollelem}>
    <View style={styles.container}>
    <Chip selectedColor='blue' selected={activeTab[0]} textStyle={{color:'grey'}} style={styles.chipelem} onPress={() =>{TabHandler(0)}}>All</Chip>
    <Chip selectedColor='blue'  selected={activeTab[1]} textStyle={{color:'grey'}} style={styles.chipelem} onPress={() =>{TabHandler(1)}}>Business</Chip>
    <Chip  selectedColor='blue' selected={activeTab[2]} textStyle={{color:'grey'}} style={styles.chipelem} onPress={() => {TabHandler(2)}}>Crypto</Chip>
    <Chip selectedColor='blue' selected={activeTab[3]} textStyle={{color:'grey'}} style={styles.chipelem} onPress={() => {TabHandler(3)}}>Technology</Chip>
    <Chip selectedColor='blue'  selected={activeTab[4]} textStyle={{color:'grey'}} style={styles.chipelem} onPress={() => {TabHandler(4)}}>Nature</Chip>
    </View>
    
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-start',
    },
    scrollelem:{
        marginTop:'3%',
        width:'95%',
        paddingBottom:'4%',
    },
    chipelem:{
        marginHorizontal:5,
        backgroundColor:'#F5F5F5',
    }
})