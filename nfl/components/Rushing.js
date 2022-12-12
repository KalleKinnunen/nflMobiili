import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useRef } from 'react';

export default function Rushing() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        paddingBottom: 20
    },

    heading: {
        color: 'black',
        fontSize: 20,
        marginTop: 50
    }
});