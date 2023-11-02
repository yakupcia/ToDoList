import React, {useState} from 'react';
import {Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import Title from './components/Title';
import InputCard from './components/InputCard';

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [dataValue, setDataValue] = useState([]);

  function onChangeText() {
    if (textInputValue) {
      setDataValue([
        ...dataValue,
        {key: Date.now().toString(), text: textInputValue},
      ]);
      setTextInputValue('');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <FlatList
        data={dataValue}
        renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
        style={styles.flat}
      />
      <InputCard
        onPress={onChangeText}
        onChangeText={setTextInputValue}
        value={textInputValue}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    justifyContent: 'center',
  },
  flat: {
    marginTop: 20,
    marginVertical: 12,
    padding: 10,
  },
  item: {
    backgroundColor: 'mediumseagreen',
    fontSize: 20,
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
});

export default App;
