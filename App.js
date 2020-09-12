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

    return Alert.alert('title', 'Messege', [
      {
        text: 'Yes',
        onPress: () => alert('Yes pressed'),
      },
      { text: 'No', onPress: () => alert('No pressed') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <Button title="Click Me" color="orange" onPress={handleTestFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // paddingTop: '20px',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '30%',
  },
});
