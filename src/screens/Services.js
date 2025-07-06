import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Services = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Our Services</Text>
    <Text style={styles.subtitle}>
      We provide modern mobile & web solutions.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefcf9',
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

export default Services;
