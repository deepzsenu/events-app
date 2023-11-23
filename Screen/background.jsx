import { View, Text } from 'react-native'
import React from 'react'

const Background = () => {
    return (
        <View>
            <LinearGradient
                colors={[mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
                style={styles.gradientOverlay}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text>Hello</Text>
            </LinearGradient>
        </View>
    )
}

export default Background