import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react';
import mainColors from '../staticNames/colors'

export default function Verification() {
  const [inputValue, setInputValue] = useState("");  // Define and initialize state

  const onChangeText = (text) => {
    setInputValue(text);  // Update the state with the new text
  };
  return (
    <View style={styles.container}>
      <View>

      </View>
      <View>
        <Text style={styles.text} >Verification</Text>
      </View>
      <View style={styles.textVerficationDiv}>
        <Text style={styles.textVerfication} >we will send you <Text style={styles.textVerficationBold} >One Time Password </Text>on your Phone number</Text>
      </View>

      <View>
        
      </View>
      <View style={styles.buttonVerification}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
      <TouchableOpacity
              // onPress={() => navigation.push('signupScreen')}
              style={styles.button}
              >
              <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create(
    {
        container : {

            flex:1,
            color: mainColors.mainColorGreen,
            alignItems:'center',
            justifyContent:'center',
            
        },
        text:{
            color:mainColors.mainColorPurple,
            fontWeight:'800',
            fontSize:25,
            marginBottom:10,
        },
        textVerficationDiv:{
          width:'70%',
        },

        textVerfication:{
          textAlign:'center',
          fontSize:14,
        }, 
        textVerficationBold:{
          fontWeight:'600',
        },
        button: {
          backgroundColor: mainColors.mainColorPurple,      
          padding: 15,
          marginTop: 80,
          width: "70%",
          alignSelf: "center",
          borderRadius: 10, // Set border radius as a percentage
          elevation: 5, // This creates a shadow effect
          shadowColor: mainColors.mainGreyTest2,
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
        },
        buttonVerification:{
          width:'100%',
        },
        buttonText:{
          color:'white',
          fontWeight:'600',
          textAlign:'center',
        }
    }
)