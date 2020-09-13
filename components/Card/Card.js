import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../Global/Colors';

const Card = ({ heading, subHeading, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.body}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  body: {
    height: '30%',
    backgroundColor: Colors.white,
    padding: 18,
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 12,
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
  subHeading: {
    color: Colors.teal,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
