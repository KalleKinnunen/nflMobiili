import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar, Image } from 'react-native';

export default function Test() {
 
  const [repositories, setRepositories] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fc54b65334mshccb15e2e326d091p148000jsn37a38d9e9ba2',
      'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
    }
  };
 
  const getRepositories = () => {
    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/2021', options)
    .then(response => response.json())
    .then(responseJson => setRepositories(responseJson._embedded))
    .catch(error => { 
        Alert.alert('Error', error); 
    });    
  }

  console.log(repositories)
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
          <View>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{item._embedded.name}</Text>
            <Text style={{fontSize: 16 }}>{item._embedded.passYards}</Text>
          </View>}
        data={repositories} 
        ItemSeparatorComponent={listSeparator} /> 
     <Button title="Find" onPress={getRepositories} />
    </View>
  );
  
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});