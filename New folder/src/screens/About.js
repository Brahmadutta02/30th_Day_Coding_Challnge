import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Logo from '../../assets/about.jpg'

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={Logo} 
        style={styles.image} 
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our application! We are dedicated to providing high-quality services 
        and innovative solutions to make your experience better. Our mission is to 
        enhance user experience through seamless design and technology.
      </Text>
      <Text style={styles.description}>
        We believe in continuous improvement and innovation, ensuring that our users get 
        the best experience possible. Join us on this journey and explore the limitless 
        possibilities we offer.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default About;
