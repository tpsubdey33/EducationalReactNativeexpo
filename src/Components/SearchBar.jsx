import { View,TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="gray" style={{marginRight:10}} />
      <TextInput placeholder='Search' />
    </View>
  )
}

export default SearchBar
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#fff",
        padding:10,
        marginTop:10,
        borderRadius:10,
        elevation:5,
        alignItems:"center",
    },
})