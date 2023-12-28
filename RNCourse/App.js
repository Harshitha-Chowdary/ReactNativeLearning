import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput,FlatList } from 'react-native';
import React from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [enteredGoaltext,setEnteredGoalText]=useState('');
  const [courseGoal,setCourseGoal]=useState([]);
// function goalInputHandler(enteredtext){
// setEnteredGoalText(enteredtext);
// }
function addgoalHandler(enteredGoaltext){
setCourseGoal((currentCourseGoals) => [...currentCourseGoals, 
  {text:enteredGoaltext, key: Math.random.toString()}]);
}
  return (
    <View style={styles.container}>
    <GoalInput onAddGoal = {addgoalHandler}/>
    {/* <View style={styles.InputContainer}>
      <TextInput 
      style={styles.TextContainer} 
      placeholder={"Your Goals"} 
      onChangeText={goalInputHandler}/>
      <Button title='Add Goals' onPress={addgoalHandler}/>
    </View> */}
    <View style={styles.goalsContainer}>
      <FlatList data={courseGoal} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
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
  }
});
