import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView ,ActivityIndicator, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { CONTINENT_QUERY } from './Query'
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { ListItem } from '@mui/material';




export default function Home({ navigation }) {

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      alignContent : "center",
      backgroundColor: '#ffffff',
      padding: 20,
      margin: 10,
      borderRadius: 25,
      width: "auto",
   shadowColor: "#1F6E8C",
      shadowOpacity: 0.5,
      shadowRadius: 10,
      shadowOffset: {
        height: 2,
        width: 1
      }
      
    },
    button: {
      position: 'absolute',
      bottom: 0, // Adjust this value to position the button vertically
      right: 0, // Adjust this value to position the button horizontally
      margin: 16,
     height : 10 
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    currency: {
      backgroundColor: '#1e90ff',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      fontWeight: "bold"
    },
    countryContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      paddingBottom: 10,
      width: "30%",
   
      
      
    },
    countryName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      borderBottomWidth: 2,
      borderBottomColor: '#cccccc',
    },
    continent: {
      backgroundColor: '#A8A196',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      fontWeight: "bold"
    },
    language: {
      backgroundColor: '#FBD85D',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      fontWeight: "bold"
    },
    loadingContainer: {
      flex: 1,
      display:"grid",
      justifyContent: 'center',
      alignItems: 'center',
      
      backgroundColor: '#ffffff',
    },
  });


  const { data, loading } = useQuery(CONTINENT_QUERY);
  useEffect(() => {
    console.log(data)
  })

  const ContinentItem = ({ country }) => {
    const { name, code, languages, currency, continent } = country;
  
    return (

      <View style={styles.container}>
       
      <View style={styles.countryContainer}>
        <Text style={styles.countryName}>{name}</Text>
          <Text style={styles.currency}>Currency: {currency ? currency : "No Data"}</Text>
          <Text style={styles.continent}>Continent: {continent.name ? continent.name : "No Data" }</Text>
          <Text style={styles.language} > language : {Object.values(languages).map((el,i) => (
          <Text key={i}>
            {el.name} {i < Object.values(languages).length - 1 ? ", " : ""}
          </Text>
        ))}</Text>
          
       
        </View>
        
      </View>
    );
  };

  if (loading) {
    return (
  
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1e90ff" />
          <Text>Loading countries...</Text>
        </View>
 
     
    ) //while loading return this
  }

  return (
    <View>
     
      <FlatList
        data={data.countries}
        renderItem={({ item }) => <ContinentItem country={item} />}
        keyExtractor={(item, index) => index}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
   
  );

  
}
  


  







