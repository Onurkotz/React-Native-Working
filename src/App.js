import React from 'react';
import Card from './components/card/card';
import Input from './components/input/input';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import products from './product_data.json';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.head_text}>patiStore</Text>

      <FlatList
        ListHeaderComponent={() => <Input />}
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
    backgroundColor: 'white',
  },
  head_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 15,
  },
});
