import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from "react-native";
import React, { useState } from "react";
import BackGImg from "../../assets/backimg.jpg";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { auth } from '../Components/Config'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const SingUpScreen = () => {
  const nav = useNavigation();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  

  const handleSinup = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((response) => {
        console.log(response.user);
        ToastAndroid.showWithGravityAndOffset(
          'Sign Up Successful',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
      );
        setEmail('');
        setPass('');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential)=> {
      const user = userCredential.user;
      // const keyId = JSON.stringify(user.accessToken);
      // console.log(keyId);
      ToastAndroid.showWithGravityAndOffset(
        'Login Successful',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
    );
      setEmail('');
      setPass('');
      nav.navigate('Home');
     
    })
    .catch(err => {
      ToastAndroid.showWithGravityAndOffset(
        'Worng Email Id or Password',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    });
};

  return (
    <ImageBackground source={BackGImg} style={{ flex: 1,justifyContent:"center",alignItems:"center",resizeMode: "cover" }}>
        <ScrollView>
        <BlurView intensity={5}>
          <View style={styles.viewContainer}>
            <Text style={styles.text1}>Registration/Login</Text>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email Id"
                placeholderTextColor="gray"
                onChangeText={(e) => setEmail(e)}
                value={email}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                placeholderTextColor="gray"
                secureTextEntry
                value={pass}
                onChangeText={(e) => setPass(e)}
              />
            </View>
            <TouchableOpacity style={styles.buttonSinup} onPress={handleSinup} >
              <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={handleLogin}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.socalIcons}>
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="google" size={30} color="#4285F4" />
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                <FontAwesome5 name="facebook" size={30} color="#4267B2" />
              </TouchableOpacity>
            </View>
          </View>
          </BlurView>
          </ScrollView>
    
    
    </ImageBackground>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex:1,
    marginLeft: 10,
    marginRight: 15,
    width: "95%",
    // height: "75%",
    marginTop: "40%",
    padding: 70,
    elevation: 15,
    borderRadius: 20,
  },
  textInput: {
    marginTop:10,
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    width: "135%",
    // height: 50,
    borderColor: "gray",
    borderRadius: 25,
    marginBottom: 6,
    fontSize: 18,
  },
  buttonSinup: {
    backgroundColor: "#dcbfe1",
    padding: 10,
    borderColor: "a55bb2",
    borderWidth: 1,
    borderRadius: 40,
    elevation: 3,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  text1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonLogin: {
    marginTop: 10,
    padding: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#a255af",
  },
  textLogin: {
    textAlign: "center",
    color: "#a255af",
    fontWeight: "bold",
    fontSize: 20,
  },
  socalIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
