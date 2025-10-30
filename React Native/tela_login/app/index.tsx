import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.nav_bar}>
        <Image 
          style={styles.icon}
          source={require('../assets/images/gatinhos_icon.jpg')}/>
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
    margin: 10
  },

  icon: {
    width: "30%",
    height: "100%"
  }
})
