import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from './input.style';

function Input() {
  return (
    <View>
      <TextInput style={Styles.input} placeholder="Ara" placeholderTextColor="black"/>
    </View>
  );
}

export default Input;
