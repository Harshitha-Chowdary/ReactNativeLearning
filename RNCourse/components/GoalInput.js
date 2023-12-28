import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

function GoalInput(props) {

    const [enteredGoaltext,setEnteredGoalText]=useState('');

    function goalInputHandler(enteredtext){
        setEnteredGoalText(enteredtext);
        }

    function addgoalHandler(){
        props.onAddGoal(enteredGoaltext);
        setEnteredGoalText("");
    }

    return(
    <View style={styles.InputContainer}>
      <TextInput 
      value= {enteredGoaltext}
      style={styles.TextContainer} 
      placeholder={"Your Goals"} 
      onChangeText={goalInputHandler}/>
      <Button title='Add Goals' onPress={addgoalHandler}/>
    </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
  });
  