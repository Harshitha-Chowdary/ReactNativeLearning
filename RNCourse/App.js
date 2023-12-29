import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,FlatList, Button } from 'react-native';
import React from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setmodalIsVisible] = useState(false);
  const [courseGoal,setCourseGoal]=useState([]);

function startAddGoalHandler(){
  setmodalIsVisible(true);
};

function endAddGoalHandler(){
  setmodalIsVisible(false);
}
function addgoalHandler(enteredGoaltext){
setCourseGoal((currentCourseGoals) => [
  ...currentCourseGoals, 
  {text:enteredGoaltext, key: Math.random.toString()}]);
  endAddGoalHandler();
}

function deleteGoalHandler(id){
    setCourseGoal(currentCourseGoals=> {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
}
  return (
  <>
   <StatusBar style='light'/>
    <View style={styles.container}>
      <Button title='Add New Goal'
       color={'Voilet'}
      onPress={startAddGoalHandler}
       />
       <GoalInput visible={modalIsVisible}
        onAddGoal = {addgoalHandler}
        onCancle={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoal} 
              renderItem={(itemData) => {
                return (
                <GoalItem text={itemData.item.text}
                 id={itemData.item.id}   
                onDeleteItem={deleteGoalHandler}
                />
                );
              }}
                  keyExtractor={(item,index)=>{
                    return item.id;
                  }}
        alwaysBounceVertical={false}/>
    </View>
    
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:'#1e085a',
    padding:50,
  },
  
  goalsContainer:{
    flex:4
  }
});
