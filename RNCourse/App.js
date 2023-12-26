import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.DummyStyle}>Another Text</Text>
       <Text 
       style={styles.DummyStyle}>Hello There!</Text>
      <Button title='Tap me!'/>
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
  DummyStyle:{
    margin: 20, 
    borderWidth: 2,
    borderColor:'red',
    padding:5
  },
});
