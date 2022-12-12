import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, NativeBaseProvider } from 'native-base';
import Passing from './components/Passing';
import Rushing from './components/Rushing';
import RushingD  from './components/RushingD';
import PassingD from './components/PassingD';
import Playerlist from './components/Playerlist';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Box width="100%" bg="primary.50" p="4" shadow={2} _text={{
    fontSize: "lg",
    fontWeight: "bold",
    color: "black" }}>
    
    Team stats (yards) from this season! </Box>
      <Button
        title="Passing"
        onPress={() => navigation.navigate('Passing')}
      />
      <Button
        title="Rushing"
        onPress={() => navigation.navigate('Rushing')}
      />
      <Button
        title="Passing (Defensive)"
        onPress={() => navigation.navigate('PassingD')} />
    
      <Button
        title="Rushing (Defensive)"
        onPress={() => navigation.navigate('RushingD')}
      />
      <Button
        title="Your favourite players"
        onPress={() => navigation.navigate('Playerlist')}
      />
</View>
</NativeBaseProvider>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Passing" component={Passing} />
        <Stack.Screen name="Rushing" component={Rushing} />
        <Stack.Screen name="PassingD" component={PassingD} />
        <Stack.Screen name="RushingD" component={RushingD} />
        <Stack.Screen name="Playerlist" component={Playerlist} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})