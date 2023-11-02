import {View, Text} from 'react-native';
import React from 'react';
import styles from './Title.styles';

const TextInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.number}> 0 </Text>
    </View>
  );
};

export default TextInput;
