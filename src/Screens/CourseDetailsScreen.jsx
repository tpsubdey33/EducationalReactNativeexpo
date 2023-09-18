import { View, Text,Image,TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
// import { FlashList } from '@shopify/flash-list';
import { WebView } from 'react-native-webview';



const CourseDetailsScreen = () => {
  const param =useRoute().params;
  const [course,setCourse] = useState([])
  const [playing,setPlaying] = useState(false);
  const tutorial= course.tutorial;



  useEffect(()=>{
    setCourse(param.data);

  },[course])

  
 
  // const renderItem = (item) => {
  //   return (
  //     <View key={item.id} style={styles.cartView}>
  //       <Text style={{textAlign:"center",fontSize:18,padding:8, fontWeight:"bold"}}>{item.name}</Text>
  //       <YoutubePlayer
  //          height={300}
  //          play={playing}
  //          videoId={item.classID}
  //          volume={100}
           
  //       />
  //     </View>
  //   );
  // };
  

  

  
  const nav = useNavigation();

  return (
    <View style={{padding:20,paddingTop:30,flex:1}}>
      <TouchableOpacity onPress={()=>nav.goBack()}>
      <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>{course.title}</Text>
        <Text style={{color:"gray"}}>By Subrta Dey</Text>
        <Image source={course.img} style={{height:180, width:"100%",marginTop:10,borderRadius:10}} />
        <Text style={{fontSize:16,marginTop:10,fontWeight:"bold"}}>About Course</Text>
        <Text numberOfLines={4} style={{fontSize:14,marginTop:10,}}>{course.details}</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold",marginTop:10 }}>Course Content</Text>
      <View style={styles.container}>
      {/* <FlashList
        data={tutorial}
        renderItem={({item})=>renderItem(item)}
        keyExtractor={(item) => item.id}
        estimatedItemSize={500}
      /> */}
      <WebView 
      source={{uri: `https://www.youtube.com/embed/${course.tutorial}`}}
      />
    </View>
    </View>
  )
}

export default CourseDetailsScreen;

const styles =StyleSheet.create({
  container:{
    flex:1,
  },
  cartView:{
    borderWidth:1,
    borderColor:"##B2B2B2",
    backgroundColor:"#fff",
    marginTop:70,
    height:300,
    padding:5,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
  },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
})