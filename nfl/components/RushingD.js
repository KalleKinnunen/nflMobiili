import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { ActivityIndicator } from "react-native";

export default function RushingD() {
  const [repositories, setRepositories] = useState([]);
  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fc54b65334mshccb15e2e326d091p148000jsn37a38d9e9ba2',
      'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
    }
  };
  


  const getRepositories= () => {
    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/defense/2022', options)
    .then(response => response.json())
    .then(data => setRepositories(data._embedded.teamRushingStatsList))
    
    .catch(err => console.error(err));
  }
  console.log(repositories)
useEffect(() => {
  
  getRepositories();
}, []);




  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Box width="100%" bg="primary.500" p="4" shadow={2} _text={{
    fontSize: "lg",
    fontWeight: "bold",
    color: "white" }}>
    
    Defensive rushing stats from this year! </Box>
      <FlatList
          data={repositories}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Box width="100%" bg="primary.50" p="2" shadow={2} _text={{
              fontSize: "xs",
              fontWeight: "bold",
              color: "black" }}>{item.name}{item.yards}yards allowed </Box>
          )}
          
        />
      
      </Center>
    </NativeBaseProvider>
  );
      }