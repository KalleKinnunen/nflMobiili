import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase('itemdb.db')


export default function Playerlist() {
  const [data, setData] = useState([])
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState('')


  useEffect(() => {
    createTable()
  }, [])

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists item (id integer primary key not null, product text, amount text);')
    }, null, updateList)
  }

  const saveProduct = () => {
    db.transaction(tx => {
      tx.executeSql('insert into item (product, amount) values (?, ?);', [product, amount])
    }, null, updateList)
    setProduct('')
    setAmount('')
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from item;', [], (_, { rows }) => setData(rows._array))
    })
  }

  const deleteItem = (id) => {
    db.transaction(tx => {
      tx.executeSql('delete from item where id = ?;', [id])
    }, null, updateList)

  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 20, margin: 10 }}> Your favourite players! </Text>

      <View style={{ marginTop: 70, marginBottom: 10 }}>
        <TextInput style={styles.input} value={product} onChangeText={product => setProduct(product)} placeholder="players name" returnKeyType="done"></TextInput>
        <TextInput style={styles.input} value={amount} onChangeText={amount => setAmount(amount)} placeholder="players age" returnKeyType="done"></TextInput>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <TouchableOpacity style={styles.button}
          onPress={saveProduct}><Text>ADD</Text></TouchableOpacity>
      </View>

      

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text>{item.product}, {item.amount}</Text>
              <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.bought}>
                <Text style={{ color: 'red', fontSize: 15, margin: 10 }}>DELETE</Text></TouchableOpacity>
            </View>
          )
        }
        }></FlatList>
      <StatusBar style="auto" />
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