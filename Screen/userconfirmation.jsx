import { View, StyleSheet, Text, TouchableOpacity, TextInput, } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import React from 'react'

import mainColors from '../staticNames/colors';

export default function UserConfirmation() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
        style={styles.gradientOverlay}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View  style={styles.userButton}>
          <Text 
          style={styles.text}
          > </Text>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Have a room?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Don't have a room?</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  gradientOverlay: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text:{
    fontSize:30,
    textAlign:"center",
    fontWeight:'bold',
    color:mainColors.veryDarkBlue,
  },
  button: {
    backgroundColor: mainColors.veryDarkBlue,
    padding: 10,
    marginTop: 20,
    width: "80%",
    height: 60,
    fontSize: 20,
    alignSelf: "center",
    borderRadius: 10, // Set border radius as a percentage
    elevation: 5, // This creates a shadow effect
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    marginBottom:20,
  },
  buttonText: {
    flex: 1,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    justifyContent: 'center',
  },

  userButton:{
    flex:1,
    justifyContent:'center',
  }
})