import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PreferenceSelector = () => {
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
    <View style={styles.container}>
      <Text style={styles.question}>Who would you like to date?</Text>
      <Text style={styles.subText}>Select all the people you're open to meeting</Text>

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
  );
};

const Option = ({ label, value, isSelected, onSelect }) => (
  <TouchableOpacity style={styles.option} onPress={() => onSelect(value)}>
    <Text style={styles.optionText}>{label}</Text>
    <View style={styles.checkbox}>
      {isSelected && <View style={styles.checkboxSelected} />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 20,
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
});

export default PreferenceSelector;
