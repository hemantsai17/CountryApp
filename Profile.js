import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.description}>Software Engineer</Text>
            <Text style={styles.location}>San Francisco, CA</Text>
            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
                mi at turpis ullamcorper volutpat. Suspendisse potenti. Donec vel
                vestibulum nunc, non pharetra lectus.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
    },
    location: {
        fontSize: 16,
        marginBottom: 10,
        color: '#666',
    },
    bio: {
        fontSize: 14,
        lineHeight: 20,
    },
});

export default Profile;
