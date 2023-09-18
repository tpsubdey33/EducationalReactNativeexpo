import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const CourseDAScreen = () => {
    const param =useRoute().params;
    const [course,setCourse] = useState([])
  
    useEffect(()=>{
      setCourse(param.data)
    },[])
    const nav = useNavigation();
    return (
      <View style={{padding:20,paddingTop:30}}>
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
        
      </View>
  )
}

export default CourseDAScreen