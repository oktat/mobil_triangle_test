import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button
} from 'react-native';
import {useState} from 'react';

export default function App() {
  
  const [base, setBase] = useState(0);
  const [height, setHeihgt] = useState(0);
  const [area, setArea] = useState(0);

  function calcArea(base, height) {
    return base * height / 2;
  }

  function startCalc() {
    let res = calcArea(base, height)
    setArea(res)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.elso} testID="title">Háromszög</Text>
      
      <TextInput style={styles.input}      
      onChangeText={text => setBase(text)}
      testID="base"
      />
      <TextInput style={styles.input}      
      onChangeText={text => setHeihgt(text)}
      testID="height"
      />

      <Button title='Számol' 
      onPress={startCalc} 
      testID="calcButton"
      />

      <TextInput 
      style={styles.input}      
      value={area}
      testID="area"
      />
      
      <Text style={styles.elso}>
        {area}
      </Text>

      <Button title="Nulla" onPress={ () => {
        setBase(0)
        setHeihgt(0)
        setArea(0)        
      }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  elso: {
    color: '#fff',
    fontSize: 30,
  },
  input: {
    backgroundColor: 'lightblue',
    width: '90%',
    fontSize: 30,
  },
});
