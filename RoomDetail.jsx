import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Picker,
  StyleSheet,
  Image
} from 'react-native';

const RoomDetailsForm = () => {
  const [location, setLocation] = useState('');
  const [rent, setRent] = useState('');
  const [occupancy, setOccupancy] = useState('single');
  const [lookingFor, setLookingFor] = useState('male');
  const [interestedInTeam, setInterestedInTeam] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [showNumber, setShowNumber] = useState(false);
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState({
    tv: false,
    fridge: false,
    kitchen: false,
    wifi: false,
    machine: false,
    ac: false,
    powerBackup: false,
    cook: false,
    parking: false
  });

  // Function to handle image selection, to be implemented
  const handleImageSelect = () => {
    console.log('Image selection to be implemented.');
  };

  const handleAmenityToggle = (amenity) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  const handleSubmit = () => {
    // Submit logic goes here
    console.log('Form submitted with data:', {
      location,
      rent,
      occupancy,
      lookingFor,
      interestedInTeam,
      contactNumber,
      showNumber,
      description,
      amenities
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Add your Room Details</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter location here..."
          value={location}
          onChangeText={setLocation}
        />

        <TextInput
          style={styles.input}
          placeholder="Rent per Person"
          keyboardType="numeric"
          value={rent}
          onChangeText={setRent}
        />

        <View style={styles.imageUploadContainer}>
          {/* Placeholder for image upload buttons */}
          {Array.from({ length: 3 }).map((_, index) => (
            <TouchableOpacity key={index} style={styles.imageUploadButton} onPress={handleImageSelect}>
              <Image source={require('path-to-default-image-icon')} style={styles.imageIcon} />
            </TouchableOpacity>
          ))}
        </View>

        <Picker
          selectedValue={occupancy}
          onValueChange={(itemValue) => setOccupancy(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Single" value="single" />
          {/* ... additional options ... */}
        </Picker>

        <Picker
          selectedValue={lookingFor}
          onValueChange={(itemValue) => setLookingFor(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Male" value="male" />
          {/* ... additional options ... */}
        </Picker>

        <View style={styles.switchRow}>
          <Text>Are you interested in making team?</Text>
          <Switch
            onValueChange={setInterestedInTeam}
            value={interestedInTeam}
          />
        </View>

        {/* ... [Amenities goes here] ... */}

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
    </ScrollView>
  );
};

// ... [Styles go here]
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff', // assuming a white background
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
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
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imageUploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageUploadButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '30%', // Adjust the width as required
    height: 100, // Adjust the height as required
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // A light gray background for the placeholder
  },
  imageIcon: {
    width: 50, // Adjust as required
    height: 50, // Adjust as required
    resizeMode: 'contain',
  },
  amenityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  amenityButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '30%', // Adjust the width as required
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // A light gray background for the placeholder
  },
  amenityIcon: {
    width: 30, // Adjust as required
    height: 30, // Adjust as required
    marginBottom: 5,
    resizeMode: 'contain',
  },
  amenityText: {
    fontSize: 12,
  },
});


export default RoomDetailsForm;
