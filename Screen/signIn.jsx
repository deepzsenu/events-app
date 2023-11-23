import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer} >
      <MapView style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: '#333333',
    borderStyle: 'solid',


  },
  mapContainer:{
    width:'90%',
    height:'50%',
    borderWidth: 2,
    borderColor: '#333333',
    borderStyle: 'solid',
  },
  map: {
    width: '100%',
    height: '100%',
    
  },
});
