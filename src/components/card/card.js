import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PointPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedPointPropType';
import Styles from './card.style';

function Card(props) {
  return (
    <View style={Styles.card_main}>
     
      <Image
        style={Styles.image}
        source={{uri: props.images}}
      />
      
     
      <Text style={Styles.card_title}>{props.title}</Text>
      
      <Text style={Styles.card_price}>{props.price}</Text>
      <Text style={Styles.card_stock}>{props.stock}</Text>
      
    </View>
  );
}

export default Card;

//   '{props.images}'  
