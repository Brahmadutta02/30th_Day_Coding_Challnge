import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from "../Component/Menu"

const Home = (props) => {
  const description = "A React Native page is a component-based structure that represents a screen in a mobile application.";
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image 
            style={styles.headerImage}
            resizeMode="contain"
            source={require("../../assets/logo.jpg")}
            
          />
          <Text style={styles.mainHeader}>Welcome to</Text>
          <Text style={[styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}>{props.channelName}</Text>
          <Text style={styles.paraStyle}>{description}</Text>
          
        </View>
        <View style={styles.menuStyle}>
          <View style={styles.lineStye}></View>
          <Menu/>
          <View style={[styles.lineStye,{marginVertical:20,}]}></View>
          </View>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      backgroundColor: "fff",
      textAlign: "center",
    },
    homeTop: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    headerImage: {
      height: undefined,
      width: "100%",
      aspectRatio: 1,
      display: "flex",
      alignItems: "stretch",
      marginTop: 50,
      borderRadius: 20,
    },
    mainHeader: {
      fontSize: 24,
      color: '#000',
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paraStyle: {
      fontSize: 16,
      textAlign: "left",
      color: "#7d7d7d",
      marginTop: 20,
      paddingBottom: 50,
      lineHeight: 20
    },
    lineStye:{
      marginBottom: 20,
      borderWidth: .50,
      borderColor: "grey"
    }
  })
export default Home