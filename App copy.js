import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameStatus from './components/GameStatus';
import ButtonGroup from './components/ButtonGroup';
import PlayerCard from './components/PlayerCard'

const CHOICES = [ { name: 'rock', 
                    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' }, 
                  { name: 'paper', 
                    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' }, 
                  { name: 'scissors', 
                    uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' 
                }];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      playerChoice: {}
    }
  }
onPressButton = (abc) => {
    const foundChoice = CHOICES.find(choice => choice.name === abc);
    this.setState ({playerChoice: foundChoice})

    
  }
  render(){
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <GameStatus></GameStatus>
        </View>
        <View style={styles.playArea}>
            <PlayerCard  playerName="Player" choice={this.state.playerChoice}></PlayerCard>
            <PlayerCard  playerName="Computer" choice={CHOICES[1]}></PlayerCard>
        </View>
        <View style={styles.choiceButton}>
            <ButtonGroup onPressButton={this.onPressButton}></ButtonGroup>
        </View>
    </View>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  playArea: {
    flex:0.4,
    flexDirection: "row",
  },
  playerCard:{
    justifyContent:"center",
    alignItems:"center"
  },
  choiceButton:{
    flex:0.4,
    justifyContent:"center",
    alignItems:"center"
  },
});
