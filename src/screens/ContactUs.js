import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUs = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Contact Us</Text>
    <Text style={styles.subtitle}>Email us at: hello@example.com</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
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

export default ContactUs;
