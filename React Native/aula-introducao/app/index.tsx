import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {

  const [text, setText] = useState("")

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={styles.square}></View>
      <Text style={styles.colorBlue}>hello world!!</Text>
      <TextInput placeholder='Digite aqui...' onChangeText={text => setText(text)}/>
      <TouchableOpacity>
        <View>
          <Text>helozinha linda</Text>
        </View>
      </TouchableOpacity>

      <Button
        title="beca linda"
        onPress={() => console.log("oioi")}
      ></Button>

      <Image 
        source={require('../assets/images/gatineo.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  colorBlue: {
    color: "orchid",
    fontSize: 40
  },

  square: {
    height: 200,
    width: 200,
    backgroundColor: "darkseagreen"
  },

  image: {
    width: 300,
    height: 300
  }
})