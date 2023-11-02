import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './InputCard.styles';

const asd = ({onPress, onChangeText, value}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Yapılacak.."
        autoCapitalize="sentences"
        onChangeText={onChangeText}
        value={value}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.button_title}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default asd;
