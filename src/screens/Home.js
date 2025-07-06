import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <Text style={styles.subtitle}>Welcome to the home page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
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

export default Home;
