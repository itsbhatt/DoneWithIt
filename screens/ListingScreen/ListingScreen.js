import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '../../components/Card';
import Colors from '../../components/Global/Colors';

const ListingScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        heading="Red jacket for sale"
        subHeading="$200"
        image={require('../../assets/jacket.jpg')}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 60,
    backgroundColor: Colors.lightGrey,
    flex: 1,
  },
});
