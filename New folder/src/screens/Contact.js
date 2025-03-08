import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Icon name="call-outline" size={20} color="#007bff" />
          <Text style={styles.infoText}>+91 (123) 456-7890</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="mail-outline" size={20} color="#007bff" />
          <Text style={styles.infoText}>contact@example.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="location-outline" size={20} color="#007bff" />
          <Text style={styles.infoText}>123 Main St, INDIA</Text>
        </View>
      </View>

      <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Your Email" placeholderTextColor="#888" keyboardType="email-address" />
      <TextInput style={[styles.input, styles.messageInput]} placeholder="Your Message" placeholderTextColor="#888" multiline />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Contact;
