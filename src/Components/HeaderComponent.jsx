import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { SimpleLineIcons  } from '@expo/vector-icons';
import { getAuth, signOut } from "firebase/auth";


const HeaderComponent = () => {
  // const param =useRoute().params;
  // const [user,setUser] = useState([])

  // useEffect(()=>{
  //   setUser(param.user)
  //   console.log(param.user)
  // },[])

    const nav = useNavigation();

    const headleLogout=()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
          ToastAndroid.showWithGravityAndOffset(
            'Logout Successful',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
            nav.navigate('SingUp')
          }).catch((error) => {
            console.log(error.massage)
          });
    }
  return (
    <View style={styles.flex}>
    <View>
      <Text>Hello,</Text>
      <Text style={{fontSize:20,fontWeight:"bold"}}>react123@gmail.com</Text>
    </View>
      <TouchableOpacity onPress={headleLogout}>
      <SimpleLineIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
    flex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
})