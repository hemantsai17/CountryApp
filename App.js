
import { ApolloProvider } from '@apollo/client';

import * as React from 'react';
import { NavigationContainer ,useNavigation } from '@react-navigation/native';
// Import the Apollo Client instance
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text ,Pressable ,StyleSheet  } from 'react-native';
import { Avatar } from "react-native-elements";
import Login from './Login';
import Home from './Home';
import Profile from './Profile'
import { useState } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {  TouchableOpacity, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const Stack = createNativeStackNavigator();








  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql', // Replace with your GraphQL API endpoint
    cache: new InMemoryCache(),
  });

  

  



  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'My Countries App', headerRight: () => {
                return (
                  <Avatar
                    containerStyle={{
                      margin: 10,
                    }}
                    size="small"
                    rounded
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                      
                    }}
                    onPress={() => {
                      
                     }}
                    activeOpacity={0.7}
                  />
                

                );
              }
            } }
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View >
        <Text>My Countries App</Text> */}
        {/* <Home /> */}
        {/* <Login/> */}
      {/* </View> */}

      
      
     
    </ApolloProvider>
  );

}
