import { Image } from 'expo-image';
import { Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { Link, router } from 'expo-router'

export default function HomeScreen() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const auth = getAuth(app)

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    router.navigate('/home')
  }

  return (
    <View style={styles.body}>
      <View style={styles.nav_bar}>
        <Image 
          style={styles.icon}
          source={require('../assets/images/gatinhos_icon.jpg')}/>
      </View>
      <View style={styles.title_container}>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <TextInput style={styles.input_box} onChangeText={(value) => setEmail(value)} placeholder='Email:'></TextInput>
      <TextInput style={styles.input_box} secureTextEntry={true} onChangeText={(value) => setPassword(value)} placeholder='Password:'></TextInput>
      <TouchableOpacity style={styles.login_box} onPress={signIn}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text_link}>Forgot your password?</Text>
      <View style={styles.contact_bar}>
        <Image
          style={styles.google}
          source={require("../assets/images/google_logo.png")}/>
        <Text style={styles.text}>  Google</Text>
      </View>
      <View style={styles.bottom_bar}>
        <Text style={styles.text}>Don't have an account? </Text>
        <Link href={'..'} style={styles.signin_text}>Sing-In</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center", 
    backgroundColor: "#D0F0F2"
  },

  nav_bar: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },

  icon: {
    width: "30%",
    height: "100%"
  },

  title_container: {
    height: "5%",
    width: "100%",
    margin: 20,
    padding: 30
  },

  title: {
    fontSize: 20,
    fontFamily: "Georgia"
  },

  input_box: {
    height: "5%",
    width: "70%",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#F5FDFF",
    padding: 10
  },

  login_box: {
    height: "5%",
    width: "70%",
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#47AFCC",
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    fontSize: 17,
    fontFamily: "Georgia"
  },

  text_link: {
    fontFamily: "Georgia",
    fontSize: 17,
    color: "#2B6C8F",
    margin: 20
  },

  contact_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%"
  },

  google: {
    width: "10%",
    height: "50%"
  },

  bottom_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%"
  },

  signin_text: {
    fontFamily: "Georgia",
    fontSize: 17,
    color: "#2B6C8F"
  }
})