import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList } from 'react-native';
import React from 'react';

export default function App() {
  const [enteredGoaltext,setEnteredGoalText]=useState('');
  const [courseGoal,setCourseGoal]=useState([]);
function goalInputHandler(enteredtext){
setEnteredGoalText(enteredtext);
}
function addgoalHandler(){
setCourseGoal((currentCourseGoals) => [...currentCourseGoals, 
  {text:enteredGoaltext, key: Math.random.toString()}]);
}
  return (
    <View style={styles.container}>
    <View style={styles.InputContainer}>
      <TextInput 
      style={styles.TextContainer} 
      placeholder={"Your Goals"} 
      onChangeText={goalInputHandler}/>
      <Button title='Add Goals' onPress={addgoalHandler}/>
    </View>
    <View style={styles.goalsContainer}>
      <FlatList data={courseGoal} 
        renderItem={(itemData) => {
          return(
            <View style={styles.goalItem}>
             <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}/>
    </View>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'skyblue',
    padding:50,
  },
  InputContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'brown'
  },
  TextContainer:{
    borderWidth:1,
    paddingLeft:5,
    width:'70%',
    marginRight: 8,
    borderColor:'black'
  },
  goalsContainer:{
    flex:4
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:10,
    backgroundColor:'white'
  },
  goalText:{
    color:'pink'
  }
});
