import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {RNPickerSelect} from 'react-native-picker-select';

const App = () => {
  const [status, setStatus] = useState("Hi community! I am open to new connections");
  const [distance, setDistance] = useState(50);
  const [purpose, setPurpose] = useState("Coffee");

  const saveAndExplore = () => {
    // Implement the logic for saving and exploring based on selected options
    // For now, just log the selected options
    console.log("Status:", status);
    console.log("Distance:", distance);
    console.log("Purpose:", purpose);
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>PM</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}></Text>

      {/* Status Input */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Add Your Status"
        value={status}
        onChangeText={(text) => setStatus(text)}
      />

      {/* Distance Picker */}
      <Text>Select Hyper local Distance</Text>
      <RNPickerSelect
        selectedValue={distance}
        onValueChange={(itemValue) => setDistance(itemValue)}
      >
        <RNPickerSelect.Item label="1 Km" value={1} />
        <RNPickerSelect.Item label="50 Km" value={50} />
        <RNPickerSelect.Item label="100 Km" value={100} />
      </RNPickerSelect>

      {/* Purpose Picker */}
      <Text>Select Purpose</Text>
      <RNPickerSelect
        selectedValue={purpose}
        onValueChange={(itemValue) => setPurpose(itemValue)}
      >
        <RNPickerSelect.Item label="Coffee" value="Coffee" />
        <RNPickerSelect.Item label="Business" value="Business" />
        <RNPickerSelect.Item label="Hobbies" value="Hobbies" />
        <RNPickerSelect.Item label="Friendship" value="Friendship" />
        <RNPickerSelect.Item label="Movies" value="Movies" />
        <RNPickerSelect.Item label="Dining" value="Dining" />
        <RNPickerSelect.Item label="Dating" value="Dating" />
        <RNPickerSelect.Item label="Matrimony" value="Matrimony" />
      </RNPickerSelect>

      {/* Save & Explore Button */}
      <TouchableOpacity
        style={{ backgroundColor: '#2ecc71', padding: 10, borderRadius: 8, marginTop: 20 }}
        onPress={saveAndExplore}
      >
        <Text style={{ color: 'white' }}>Save & Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;