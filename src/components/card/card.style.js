import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card_main: {
    flex: 1,
    backgroundColor: 'aqua',
    margin: 9,
    borderWidth: 0.2,
    borderRadius: 4,
    padding: 4,
    width: Dimensions.get('window').width / 2.2,
  },
  image: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    height: Dimensions.get('window').height / 6,
    
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    color: 'black',
  },
  card_price: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    color: 'gray',
    textAlign: 'center',
  },
  card_stock: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'right',
    color: 'gray',
  },
});
