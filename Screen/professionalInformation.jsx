import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import mainColors from '../staticNames/colors';

const ProfessionalInformation = () => {

    const [jobTitle, setJobTitle] = useState('');
    const [jobPlace, setJobplace] = useState('');
    const [course, setCourse] = useState('');
    const [courseCity, setCourseCity] = useState('');



    return (
        <LinearGradient
            colors={[mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
            style={styles.gradientOverlay}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>What's your job title?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Software Engineer"
                        keyboardType="string"
                        value={jobTitle}
                        onChangeText={setJobTitle}
                    />
                </View>
                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>Where Do you work?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Delhi"
                        keyboardType="string"
                        value={jobTitle}
                        onChangeText={setJobTitle}
                    />
                </View>
                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>Highest Qualification?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="B.tech(Computer Science)"
                        keyboardType="string"
                        value={course}
                        onChangeText={setCourse}
                    />
                </View>
                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>From where have you completed your education?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Delhi"
                        keyboardType="string"
                        value={courseCity}
                        onChangeText={setCourseCity}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )

}

export default ProfessionalInformation

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
    title: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: mainColors.veryDarkBlue,
        marginBottom: 10,
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: mainColors.veryDarkBlue,
        marginBottom: 10,
    },
    note: {
        fontSize: 14,
        color: 'black',
        marginBottom: 20,
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
    InnerContainer: {
        marginTop: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    inputDOB: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        textAlign: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
});