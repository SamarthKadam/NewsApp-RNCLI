import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/fonts/colors/Colors';

export default function Card({val}) {



    let temp='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76f95899df261776c441932b344183f1.jpg'
    if(val==1)
    {
      temp='https://i.insider.com/64bebc9fbea3440019602937?width=1200&format=jpeg'
    }


    return (
      <View style={styles.container}>
      <View>
        <Image style={styles.imgsetting} source={{uri:temp}}></Image>
      <Text style={styles.boldText}>Ukraine conflict:kyiv braces for a Russian assault</Text>
      <View style={styles.bcontainer}>
        <Text style={styles.smText}>World</Text>
        <Text style={styles.smText}>Ema roth</Text>
      </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        // width:'65%',
        width:215,
        // backgroundColor:'green'
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    },
    imgsetting:{
        height:120,
        width:220,
        borderRadius:10
    },
    bcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    boldText:{
      marginTop:10,
      fontSize:13,
      color:'black',
      fontWeight:'bold'
    },
    smText:{
      fontSize:10,
      color:'grey'
    }
})