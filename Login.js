import React, { useState } from 'react';
import { View, Alert, Button, Text, Modal,Image , TextInput, TouchableOpacity, StyleSheet } from 'react-native';




const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    
    const handleLogin = () => {
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        if (email !== "" && password !== "") {
            setModalVisible(false)
            setEmail('');
            setPassword('');
            navigation.navigate('Home')
        }
     
        if (email == "" ||  password == ""){
            setModalVisible(true)
        }  
    };

    return (
        <View style={styles.container}>
            {/* <img src={planet}/> */}
            <Image source={{ uri: 'https://img.freepik.com/free-vector/earth-globe-icon-white-background_1308-122927.jpg' }}
                style={{ width: 200, height: 200 }} />
            <Text style={styles.title}>Login to your country app</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                // secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
           
            <TouchableOpacity style={styles.button}
                onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View>
                {isModalVisible ? <Text style={styles.popup}>
                    Enter any credentials to proceed
                </Text> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: '#ffffff',
        width: "100%"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    popup: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "red",
        margin: 10
    },
    input: {
        width: '60%',
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#1e90ff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Login;
