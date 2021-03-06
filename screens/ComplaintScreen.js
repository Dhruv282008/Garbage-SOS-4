import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import BuzzerScreen from './BuzzerScreen'
export default class ComplaintScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            contact: "",
            complaint: ""
        };
    }
    render() {
        return (
            <KeyboardAvoidingView>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../assets/complain.jpg')}
                    />
                <Text style = {styles.header}>Raise A Complaint</Text>
            </View>
                <View>
                    <TextInput
                        style = {styles.input}
                        placeholder="Your Name Here"
                    ></TextInput>

                    <TextInput
                        style={styles.input}
                        maxLength={10}
                        keyboardType={"numeric"}
                        placeholder="Your Contact Number"
                    ></TextInput>

                    <TextInput
                        style = {styles.complaintinput}
                        multiline={true}
                        placeholder="Your Complaint Here"
                    ></TextInput>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontStyle: 'italic',
        fontSize: 30,
        color: 'white'
    },
    input: {
        borderBottomWidth: 3,
        borderBottomColor: 'orange',
        width: 300,
        height: 20,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 20,
        padding: 15,
        fontStyle: 'italic',
        color: 'white'
    },
    complaintinput: {
        borderWidth: 3,
        borderColor: 'red',
        width: 300,
        height: 250,
        padding: 15,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 100,
        fontStyle: 'italic',
        color: 'white'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: 'flex-end'
    }
});
