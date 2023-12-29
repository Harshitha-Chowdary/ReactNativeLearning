import { useState } from 'react';
import { StyleSheet,
  View, 
  Button, 
  TextInput, 
  Modal,
  Image 
} from 'react-native';
function GoalInput(props) {
    const [enteredGoaltext,setEnteredGoalText]=useState('');
     
    function goalInputHandler(enteredtext){
      setEnteredGoalText(enteredtext);
    }
    function addgoalHandler(){
        props.onAddGoal(enteredGoaltext);
        setEnteredGoalText('');
    }

    return(
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.InputContainer}>
    <Image style={styles.image}
      source={require('../assets/Goal.jpeg')}/>
      <TextInput 
        value= {enteredGoaltext}
        style={styles.TextContainer} 
        placeholder={"Your Goals"} 
        onChangeText={goalInputHandler}/>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Add Goals' onPress={addgoalHandler} />
        </View>
        <View style={styles.button}>
           <Button title="Cancel" onPress={props.onCancle} color='purple'/>
        </View>
        </View>
    </View>
  </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    InputContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:16,
      backgroundColor:'#1e085a'
    },
    TextContainer:{
      borderWidth:1,
      borderColor:'yellow',
      backgroundColor:'pink',
      color: 'red',
      borderRadius:16,
      paddingLeft:16,
      width:'100%',
      borderColor:'black'
    },
    buttonContainer:{
      marginTop:15,
     flexDirection: 'row' 
    },
    button:{
      width: 100,
      marginHorizontal: 8
    },
    image:{
      width:300,
      height:300,
      margin:20
    },
  });
  