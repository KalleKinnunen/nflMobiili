import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { ActivityIndicator } from "react-native";

export default function Passing() {
  const [repositories, setRepositories] = useState([]);
  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fc54b65334mshccb15e2e326d091p148000jsn37a38d9e9ba2',
      'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
    }
  };
  


  const getRepositories= () => {
    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/2021', options)
    .then(response => response.json())
    .then(data => setRepositories(data.items))
    
    .catch(err => console.error(err));
  }
  console.log(repositories)
useEffect(() => {
  
  getRepositories();
}, []);


  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Box> Fetch API</Box>
      <FlatList
          data={repositories}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}, {item.passYards}</Text>
          )}
        />
      
      </Center>
    </NativeBaseProvider>
  );
      }
