import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',


  },
  map: {
    width: '100%',
    height: '70%',
  },
});
