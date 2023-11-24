import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch,} from 'react-native';
import mainColors from '../staticNames/colors';
import { LinearGradient } from "expo-linear-gradient";


const Hingecheck = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // const [isOptOut, setIsOptOut] = useState(false);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [selectedGender, setSelectedGender] = useState('man');


    return (
        <LinearGradient
            colors={[mainColors.tailwindWhite, mainColors.tailWindBlue, mainColors.tailwindWhite, mainColors.tailwindPink, mainColors.tailwindWhite, mainColors.tailwindLightBlue, mainColors.tailwindWhite]}
            style={styles.gradientOverlay}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={styles.container}>
                {/* <Text style={styles.title}>NO BACKGROUND CHECKS ARE CONDUCTED</Text> */}
                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>What's your name?</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="First name"
                        value={firstName}
                        onChangeText={setFirstName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Last name"
                        value={lastName}
                        onChangeText={setLastName}
                    />

                    <Text style={styles.note}>Last name is optional, and only shared with matches.</Text>
                </View>

                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>What's your email?</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="email@example.com"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.InnerContainer}>
                    <Text style={styles.header}>What's your date of birth?</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputDOB}
                            placeholder="DD"
                            keyboardType="number-pad"
                            maxLength={2}
                            value={day}
                            onChangeText={setDay}
                        />
                        <TextInput
                            style={styles.inputDOB}
                            placeholder="MM"
                            keyboardType="number-pad"
                            maxLength={2}
                            value={month}
                            onChangeText={setMonth}
                        />
                        <TextInput
                            style={styles.inputDOB}
                            placeholder="YYYY"
                            keyboardType="number-pad"
                            maxLength={4}
                            value={year}
                            onChangeText={setYear}
                        />
                    </View>
                </View>
                {/* <View style={styles.InnerContainer}>
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
                                </View> */}
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
        marginTop:20,
        height:50,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:20,
    },
    InnerContainer: {
        marginTop: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,
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

export default Hingecheck