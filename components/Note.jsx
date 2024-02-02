import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

const Note = (prop) => {
  return (
    <View style={styles.container}>
        <View style={styles.cont}>
            <View style={styles.square}></View>
    <Text>{prop.text}</Text> 
    </View>
    
    <Ionicons name={"trash-sharp"} size={20} color='red' onPress={()=>handleDelete(index)}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
container:{
padding:15,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginBottom:20,
borderWidth:2,
borderColor:'green',
borderRadius:10
},
cont:{
    
    flexDirection:'row',
    alignItems:'center',
    gap:10
    },
square:{
    height:20,
    width:20,
    backgroundColor:'blue',
    opacity:0.4,
    borderRadius:10
}
})

export default Note