import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import mainColors from '../staticNames/colors';
import { Picker } from '@react-native-picker/picker';


const Option = ({ label, value, isSelected, onSelect }) => (
  <TouchableOpacity style={styles.option} onPress={() => onSelect(value)}>
    <Text style={styles.optionText}>{label}</Text>
    <View style={styles.checkbox}>
      {isSelected && <View style={styles.checkboxSelected} />}
    </View>
  </TouchableOpacity>
);


const GenderPreference = () => {
  const [selectedGender, setSelectedGender] = useState('man');
  const [selectedOptions, setSelectedOptions] = useState({
    men: false,
    women: false,
    nonBinary: false,
    everyone: false,
  });

  const handleSelectOption = (option) => {
    // If "Everyone" is selected, reset others, or vice versa
    if (option === 'everyone') {
      setSelectedOptions({ men: false, women: false, nonBinary: false, everyone: true });
    } else {
      setSelectedOptions({ ...selectedOptions, [option]: !selectedOptions[option], everyone: false });
    }
  };

  return (
    <LinearGradient
      colors={[mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
      style={styles.gradientOverlay}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.InnerContainer}>
          <Text style={styles.header}>Which gender describes you best?</Text>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Man" value="man" />
            <Picker.Item label="Woman" value="woman" />
            <Picker.Item label="Non-binary" value="nonbinary" />
          </Picker>
        </View>
        <View style={styles.InnerContainer}>
          <Text style={styles.header}>Whom do you like to live with?</Text>

          <Option
            label="Men"
            value="men"
            isSelected={selectedOptions.men}
            onSelect={handleSelectOption}
          />
          <Option
            label="Women"
            value="women"
            isSelected={selectedOptions.women}
            onSelect={handleSelectOption}
          />
          <Option
            label="Non-binary people"
            value="nonBinary"
            isSelected={selectedOptions.nonBinary}
            onSelect={handleSelectOption}
          />
          <Option
            label="Everyone"
            value="everyone"
            isSelected={selectedOptions.everyone}
            onSelect={handleSelectOption}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  )
}

export default GenderPreference

const styles = StyleSheet.create({
  gradientOverlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: mainColors.veryDarkBlue,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: mainColors.veryDarkBlue,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    height: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  optionText: {
    flex: 1,
    fontSize: 18,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    width: 12,
    height: 12,
    backgroundColor: 'black',
  },
  picker: {

  }

});