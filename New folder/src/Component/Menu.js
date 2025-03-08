import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

const Menu = () =>{
    const navigation = useNavigation()
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={StyleSheet.buttonStyle}
            onPress={() => navigation.navigate('Course')}>
                <Text>Course</Text>
                {/* <Image
                style={styles.iconStyle}
                source={{uri:"https://icons8.com/icon/50900/course-assign"}}/> */}
            </TouchableOpacity>

            {/* <TouchableOpacity style={StyleSheet.buttonStyle}
            onPress={() => navigation.navigate('UserData')}>
                <Text>UserData</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={StyleSheet.buttonStyle}
            onPress={() => navigation.navigate('About')}>
                <Text>About</Text>
            </TouchableOpacity>

            <TouchableOpacity style={StyleSheet.buttonStyle}
            onPress={() => navigation.navigate('Contact')}>
                <Text>Contact</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={StyleSheet.buttonStyle}
            onPress={() => navigation.navigate('Course')}>
                <Text>Course</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textStyle:{
        textTransform: "uppercase",
        marginBottom: 50,
    },
    iconStyle: {
        width:"100%",
        height: 50,
        aspectRatio: 1
    },
})

export default Menu