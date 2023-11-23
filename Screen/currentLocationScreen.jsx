import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import mainColors from '../staticNames/colors';
import { LinearGradient } from "expo-linear-gradient";


const CurrentLocationScreen = () => {

  const goToCurrentLocation = () => {
    // Logic to access device's GPS and center the map
  };

  return (
    <LinearGradient
      colors={[mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
      style={styles.gradientOverlay}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.header}> Where do you live?</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            // initialRegion should be set according to the user's current location or a default value
            initialRegion={{
              latitude: 28.679,
              longitude: 77.069,
              // latitudeDelta: 0.0922,
              // longitudeDelta: 0.0421,
            }}
          // other props for MapView as needed
          >
            {/* Markers and other MapView components */}
          </MapView>
          <View style={styles.zoomContainer}>
            <Text style={styles.zoomText}>Zoom into your neighbourhood</Text>
          </View>

          <TouchableOpacity style={styles.currentLocationButton} onPress={goToCurrentLocation}>
            <Text style={styles.currentLocationText}>Go to current location</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientOverlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: mainColors.veryDarkBlue,
    marginBottom: 10,
  },
  mapContainer: {
    width: '100%',
    height: '65%',
    borderWidth: 1,
    borderColor: mainColors.veryDarkBlue,
    borderStyle: 'solid',
    // borderRadius: 20,
  },
  map: {
    flex: 1, // Take up all space available
    borderRadius: 20,
  },
  zoomContainer: {
    position: 'absolute', // Position over the map
    bottom: 70, // Position at the bottom
    alignSelf: 'center', // Center horizontally
    backgroundColor: mainColors.veryDarkBlue, // Placeholder color
    padding: 8,
    borderRadius: 20,
  },
  zoomText: {
    color: '#fff',
    fontSize: 16,
  },
  currentLocationButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentLocationText: {
    marginLeft: 8,
    fontSize: 16,
  }
  ,
  button: {
    backgroundColor: mainColors.veryDarkBlue,
    padding: 10,
    borderRadius: 30,
    marginTop: 20,
    height: 50,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default CurrentLocationScreen;
