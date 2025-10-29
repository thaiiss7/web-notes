import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={styles.square}></View>
      <Text style={styles.colorBlue}>hello world!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  colorBlue: {
    color: "blue",
    fontSize: 40
  },

  square: {
    height: 200,
    width: 200,
    backgroundColor: "rebeccapurple"
  }
})