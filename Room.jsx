import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Picker, StyleSheet } from 'react-native';

const RoomRequirementForm = () => {
  const [location, setLocation] = useState('');
  const [rent, setRent] = useState('');
  const [occupancy, setOccupancy] = useState('single');
  const [lookingFor, setLookingFor] = useState('male');
  const [contactNumber, setContactNumber] = useState('');
  const [showNumber, setShowNumber] = useState(false);
  const [interestedInTeam, setInterestedInTeam] = useState(false);
  const [interestedInPG, setInterestedInPG] = useState(false);
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Perform submission logic
    console.log('Submitting form...');
    // You would typically send this data to a backend server or handle it as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add your Requirement</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your location..."
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Approx. Rent"
        keyboardType="numeric"
        value={rent}
        onChangeText={setRent}
      />

      <Picker
        selectedValue={occupancy}
        onValueChange={(itemValue, itemIndex) => setOccupancy(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Single" value="single" />
        <Picker.Item label="Multiple" value="multiple" />
      </Picker>

      <Picker
        selectedValue={lookingFor}
        onValueChange={(itemValue, itemIndex) => setLookingFor(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Any" value="any" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        value={contactNumber}
        onChangeText={setContactNumber}
      />

      <View style={styles.switchRow}>
        <Text>Show your number to others</Text>
        <Switch
          onValueChange={setShowNumber}
          value={showNumber}
        />
      </View>

      <View style={styles.switchRow}>
        <Text>Are you interested in making team?</Text>
        <Switch
          onValueChange={setInterestedInTeam}
          value={interestedInTeam}
        />
      </View>

      <View style={styles.switchRow}>
        <Text>Are you interested in PG?</Text>
        <Switch
          onValueChange={setInterestedInPG}
          value={interestedInPG}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default RoomRequirementForm;
