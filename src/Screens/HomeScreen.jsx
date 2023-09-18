import { View, StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import SearchBar from '../Components/SearchBar'
import SliderComponents from '../Components/SliderComponents'
import VideoCourse from '../Components/VideoCourse'
import BasicCourse from '../Components/BasicCourse'
import AdvancedCourse from '../Components/AdvancedCourse'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent/>
      <SearchBar />
      <ScrollView style={{marginTop:5}}
        showsVerticalScrollIndicator={false}
      >
      <SliderComponents />
      <VideoCourse />
      <BasicCourse />
      <AdvancedCourse />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        padding:20,
        backgroundColor:"#E5E5E5",
    },
});