import React from "react";
import {SafeAreaView, View, Text, StyleSheet} from "react-native";

function App() {

  return(

    <SafeAreaView style={Styles.container} >

      <Text style={Styles.head_text} >patiStore</Text>
      
      <View>
        <Text>patiStore</Text>
      </View>
      
    </SafeAreaView>
    
  )
  
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0"
  },
  head_text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
  }
})