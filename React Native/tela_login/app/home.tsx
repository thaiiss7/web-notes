import { Image } from 'expo-image';
import { Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { Link, router } from 'expo-router';
import DateTimePicker from "@react-native-community/datetimepicker";
import { db } from "../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function HomeScreen() {

  const[title, setTitle] = useState("");
  const[year, setYear] = useState("");
  const[author, setAuthor] = useState("");
  const[editor, setEditor] = useState("");
  const[numOfPages, setNumOfPages] = useState("");
  const[genre, setGenre] = useState("");
  const[sinopse, setSinopse] = useState("");
  const[language, setLanguage] = useState("");
  const[cover, setCover] = useState("");

  const[showPicker, setShowPicker] = useState(false);

  const auth = getAuth(app)

  async function RegisterBook() {
    try {
      const auth = getAuth()
      const user = auth.currentUser

      if(!user) {
        console.log("User not found")
        return 
      }

      if (!title || !year || !author || !editor || !numOfPages || !genre || !sinopse || !language) {
        console.log("escreve ai")
        return
      }

      const book = {
        title,
        year: Number(year),
        author, 
        editor,
        numOfPages,
        genre,
        sinopse,
        language,
        cover: cover || null,
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await addDoc(collection(db, "books"), book)
      console.log("Book registered")

    } catch(e) {
      console.log("Error at register", e)
    }
  }

  // const handleDateChange = (event, selectedDate) => {
  //   setShowPicker(false);

  //   if (selectedDate) {
  //     const selectedYear = selectedDate.getFullYear();
  //     setYear(String(selectedYear));
  //   }
  // };

  return (
    <View style={styles.body}>
        <View style={styles.title_container}>
            <Text style={styles.title}>Home</Text>
        </View>
        <TextInput style={styles.input_box} onChangeText={(value) => setTitle(value)} placeholder='Book Title:'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setYear(value)} placeholder='Publication date:'></TextInput>

        {/* <TouchableOpacity
        style={styles.input_box}
        onPress={() => setShowPicker(true)}
        >
          <Text style={styles.text}>{year ? `Year: ${year}` : "Publication date:"}</Text>
        </TouchableOpacity>

        {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )} */}

        <TextInput style={styles.input_box} onChangeText={(value) => setAuthor(value)} placeholder='Author:'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setEditor} placeholder='Editor:'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setLanguage} placeholder='Language:'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setNumOfPages} placeholder='Number of pages:'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setGenre} placeholder='Genre:'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setCover} placeholder='Cover image (link):'></TextInput>
        <TextInput style={styles.input_box} onChangeText={(value) => setSinopse} placeholder='Sinopse:'></TextInput>
        <TouchableOpacity style={styles.login_box} onPress={RegisterBook}>
        <View>
            <Text>Register</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.bottom_bar}>
            <Link href={'/login'} style={styles.signout_text}>Sign-Out</Link>
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
    padding: 30,
    justifyContent: "center"
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

  signout_text: {
    fontFamily: "Georgia",
    fontSize: 17,
    color: "#2B6C8F"
  }
})