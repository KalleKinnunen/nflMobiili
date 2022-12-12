import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Passing from './components/Passing';
import Receiving from './components/Receiving';
import Rushing from './components/Rushing';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button
        title="Passing"
        onPress={() => navigation.navigate('Passing')}
      />
      <Button
        title="Rushing"
        onPress={() => navigation.navigate('Rushing')}
      />
            <Button
        title="Receiving"
        onPress={() => navigation.navigate('Receiving')}
      />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Passing" component={Passing} />
        <Stack.Screen name="Rushing" component={Rushing} />
        <Stack.Screen name="Receiving" component={Receiving} />
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