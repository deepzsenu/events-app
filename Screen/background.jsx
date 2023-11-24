import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import mainColors from '../staticNames/colors';

const Background = () => {
    return (
        
            <LinearGradient
                colors={[mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
                style={styles.gradientOverlay}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
            </LinearGradient>
    )
}

export default Background

const styles = StyleSheet.create({
    gradientOverlay: {
        flex:1,
    },
  });