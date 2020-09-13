import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import Card from '../../components/Card';
import Colors from '../../components/Global/Colors';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/jacket.jpg')} />
      <View style={styles.body}>
        <Text style={styles.heading}>This is jacket</Text>
        <Text style={styles.price}>price</Text>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  body: {
    height: '30%',
    backgroundColor: Colors.white,
    padding: 18,
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    paddingTop: 40,
    // borderRadius: 20,
    overflow: 'hidden',
    // elevation: 12,
  },
  heading: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    height: '70%',
    width: '100%',
  },
  price: {
    color: Colors.teal,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
