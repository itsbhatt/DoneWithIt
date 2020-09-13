import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppButton from '../../components/AppButton';

const WelcomeScreen = () => (
  <ImageBackground
    blurRadius={3}
    style={styles.background}
    source={require('../../assets/background.jpg')}
  >
    <StatusBar backgroundColor="#fff" />

    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-red.png')}
      />
      <Text style={styles.name}>Done With It</Text>
    </View>

    <View style={styles.btnContainer}>
      <AppButton
        title="LOGIN"
        onPress={() => console.log('Tapped LOGIN')}
      ></AppButton>
      <AppButton
        title="SIGNUP"
        color="secondary"
        onPress={() => console.log('Tapped SIGNUP')}
      ></AppButton>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  btnContainer: {
    justifyContent: 'space-between',
    height: 120,
  },
  logo: { width: 100, height: 100 },
  logoContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 120,
    right: 0,
    left: 0,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
