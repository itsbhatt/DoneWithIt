import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  const handleTestFunc = () => {
    // alert('Button Pressed');
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <View style={{ flex: 8, width: '100%' }}>
        <Image
          style={{ width: '100%', height: '100%', zIndex: 1 }}
          source={require('./assets/illustration.jpg')}
        />

        <View
          style={{
            position: 'absolute',
            zIndex: 2,
            flex: 1,
            height: 400,
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            right: 0,
            left: 0,
            // backgroundColor: '#fff',
          }}
        >
          <Image
            style={{ width: 100, height: 100, zIndex: 5 }}
            source={require('./assets/favicon.png')}
          />
          <Text>dfasdfa</Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#fcb', width: '100%' }}></View>
      <View style={{ flex: 1, backgroundColor: '#353', width: '100%' }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingTop: '20px',
    // justifyContent: 'center',
  },
});
