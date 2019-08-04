import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GameStatus (props) {
    return (
        <View>
            <Text style={{color:props.myHeader.color, fontSize:24}}>{props.myHeader.result}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    header : {
        fontSize:20,
    }
})
export default GameStatus;
