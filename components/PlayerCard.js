import React, { Component } from 'react';
import { View, Text,Image ,TouchableOpacity, StyleSheet } from 'react-native';

function PlayerCard (props){
  const title = props.choice.name && props.choice.name.charAt(0).toUpperCase() + props.choice.name.slice(1);
    return(
        <View style={styles.column}>
            <Text style={styles.choiceDescription}>
              {props.playerName}
            </Text>
            <Image
              source={{uri: props.choice.uri}}
              resizeMode="contain"
              style={styles.choiceImage}
            />
            <Text style={styles.choiceCardTitle}>
              {title}
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
   column:{
     flex:1,
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center",
   },
   choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
   choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },

})
export default PlayerCard;
