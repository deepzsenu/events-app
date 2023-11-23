import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import names from "../staticNames/names";
import mainColors from "../staticNames/colors";
// import signupScreen from "./signupScreen";

let Home;

if (Platform.OS === "web") {
  home = () => (
    <Text style={styles.container}>Hello we are working on web </Text>
  );
} else {
  Home = () => {

    const navigation = useNavigation(); 

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/mainShakeHands.png")}
          style={styles.image}
        >
          <LinearGradient
            colors={["transparent", mainColors.veryDarkBlue]}
            style={styles.gradientOverlay}
          >
            <Text style={styles.brandName}>{names.brandName}</Text>
            <Text style={styles.brandTagline}>{names.brandTagLine}</Text>
            <View style={styles.termsContainer}>
              <Text style={styles.termsText}>{names.termsAndConditions}</Text>
            </View>
            <Text style={styles.text} >Looking for a flatmate?</Text>

            <TouchableOpacity
              // onPress={() => navigation.push('signupScreen')}
              style={styles.button}
              >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  gradientOverlay: {
    flex: 1,
  },
  brandName: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginTop: "25%",
    textShadowColor: mainColors.veryDarkBlue,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  brandTagline: {
    fontSize: 17,
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
    marginTop: "1%",
    textShadowColor: mainColors.veryDarkBlue,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  termsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: "100%",
  },
  termsText: {
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: mainColors.mainGreyTest1,
    padding: 15,
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
    borderRadius: 20, // Set border radius as a percentage
    elevation: 5, // This creates a shadow effect
    shadowColor: mainColors.mainGreyTest2,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    color: mainColors.veryDarkBlue,
    textAlign: "center",
    fontWeight: "bold",
  },
  signIn: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    textShadowColor: mainColors.mainGreyTest1,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }
});

export default Home;
