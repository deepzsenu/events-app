import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from "react";
import mainColors from "../staticNames/colors";

export default function Verification() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textIcon}>
            <Text >
            <FontAwesomeIcon
            icon={faMobileAlt}
            size={50}  // Change the size as needed
            color={mainColors.britishRacingGreen}
            />
            </Text>
      </View>
      <View>
        <Text style={styles.text}>Verification</Text>
      </View>
      <View style={styles.textVerficationDiv}>
        <Text style={styles.textVerfication}>
          We will send you
          <Text style={styles.textVerficationBold}> One Time Password </Text>on
          your Phone number
        </Text>
      </View>

      <View></View>
      <View style={styles.buttonVerification}>
        <TextInput
          style={styles.buttonVerificationInput}
          placeholder="Enter your number here"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: mainColors.britishRacingGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: mainColors.britishRacingGreen,
    fontWeight: "800",
    fontSize: 25,
    marginBottom: 10,
  },
  textVerficationDiv: {
    width: "70%",
  },

  textVerfication: {
    textAlign: "center",
    fontSize: 15,
  },
  textVerficationBold: {
    fontWeight: "600",
    // justifyContent:'center',
  },
  button: {
    backgroundColor: mainColors.britishRacingGreen,
    padding:10,
    marginTop: 20,
    width: "70%",
    height:50,
    fontSize:30,
    alignSelf: "center",
    borderRadius: 10, // Set border radius as a percentage
    elevation: 5, // This creates a shadow effect
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonVerification: {
    width: "100%",
  },
  buttonText: {
    flex:1,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize:18,
    justifyContent:'center',
  },
  buttonVerificationInput: {
    height: 60,
    textAlign:'center',
    width: "70%",
    marginTop:70,
    borderWidth: 1,  // Set the width of the border
    borderColor: 'black',  // Set the color of the border
    borderRadius: 10,
    alignSelf:'center',
    fontSize:20,
  },
  textIcon:{
    marginBottom:10,
  }

  // textIcon:{
  
  //   height:60,
  // }
});
