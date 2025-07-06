import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUs = () => (
  <View style={styles.container}>
    <Text style={styles.title}>About Us</Text>
    <Text style={styles.subtitle}>
      We are a team passionate about development.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff8000',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});

export default AboutUs;
