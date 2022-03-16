import React from 'react';
import Card from './components/card/card';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import products from './product_data.json';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.head_text}>patiStore</Text>

      <FlatList
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={({item}) => (
          <Card
            images={item.imgURL}
            title={item.title}
            price={item.price}
            stock={item.inStock === true ? 'In stock' : 'Not in stock'}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  head_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 15,
  },
});
