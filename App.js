import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GameStatus from './components/GameStatus';
import ButtonGroup from './components/ButtonGroup';
import PlayerCard from './components/PlayerCard';

import Dialog, { DialogContent } from 'react-native-popup-dialog';



const CHOICES = [{
  name: 'rock',
  uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
},
{
  name: 'paper',
  uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
},
{
  name: 'scissors',
  uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
}];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result: {},
      count: [0, 0, 0, 0, 0, 0, 0]
    }
  }


  randomChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
  }
  onPressButton = (abc) => {
    const foundChoice = CHOICES.find(choice => choice.name === abc);
    let comRandom = this.randomChoice();
    let myResult = {}
    const comChoice = CHOICES.find(item => item.name === comRandom.name)
    if (foundChoice.name == comChoice.name) {
      myResult = { result: 'Tie game!!', color: "black" }
    }
    else if (foundChoice.name == 'rock' && comChoice.name == 'paper') {
      myResult = { result: 'Defeat', color: "red" }
    }
    else if (foundChoice.name == 'paper' && comChoice.name == 'rock') {
      myResult = { result: 'Victory', color: "green" }
    }
    else if (foundChoice.name == 'scissors' && comChoice.name == 'rock') {
      myResult = { result: 'Defeat', color: "red" }
    }
    else if (foundChoice.name == 'rock' && comChoice.name == 'scissors') {
      myResult = { result: 'Victory', color: "green" }
    }
    else if (foundChoice.name == 'paper' && comChoice.name == 'scissors') {
      myResult = { result: 'Defeat', color: "red" }
    }
    else if (foundChoice.name == 'scissors' && comChoice.name == 'paper') {
      myResult = { result: 'Victory', color: "green" }
    }

    total = this.state.count[0];
    myWin = this.state.count[1];
    myDef = this.state.count[2];
    myTie = total - (myWin + myDef);

    if (myResult.result == 'Victory') {
      myWin = myWin + 1;
    }
    else if (myResult.result == 'Defeat') {
      myDef = myDef + 1;
    } else {
      myTie = myTie + 1;
    }

    total++;
    perWin = (myWin * 100 / total).toFixed(0);
    perDef = (myDef * 100 / total).toFixed(0);
    perTie = (myTie * 100 / total).toFixed(0);
    let myCount = [total, myWin, myDef, myTie, perWin, perDef, perTie]

    this.setState({
      playerChoice: foundChoice,
      computerChoice: comChoice,
      result: myResult,
      count: myCount
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <GameStatus myHeader={this.state.result}></GameStatus>
        </View>
        <View style={styles.choicesContainer}>
          <PlayerCard playerName="Player" choice={this.state.playerChoice}></PlayerCard>
          <Text style={styles.myVs}>vs</Text>
          <PlayerCard playerName="Computer" choice={this.state.computerChoice}></PlayerCard>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonGroup onPressButton={this.onPressButton}></ButtonGroup>
        </View>



        <View style={styles.container}>
          <Button
            title="Result"
            color="orange"
            onPress={() => {
              this.setState({ visible: true });
            }}
          />
          <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
          >
            <DialogContent style={styles.myDialog}>
              <View style={styles.myTotal}>
                <Text style={styles.myTotalText}>Total: {this.state.count[0]}</Text>
              </View>
              <View style={styles.myDialogContent}>
                <Text style={styles.myWinText}>Win: {this.state.count[1]}</Text>
                <Text style={styles.myWinText}>{this.state.count[4]} %</Text>
              </View>
              <View style={styles.myDialogContent}>
                <Text style={styles.myDefText}>Defeat: {this.state.count[2]}</Text>
                <Text style={styles.myDefText}>{this.state.count[5]} %</Text>
              </View>
              <View style={styles.myDialogContent}>
                <Text style={styles.myTieText}>Tie: {this.state.count[3]}</Text>
                <Text style={styles.myTieText}>{this.state.count[6]} %</Text>
              </View>

            </DialogContent>
          </Dialog>
        </View>
      </View>

    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  header: {
    fontSize: 20,
    marginTop:20
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  myDialog: {
    width: 300,
    height: 500,
  },
  myTotal: {
    justifyContent: "center",
    alignItems: "center",
  },
  myDialogContent: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    flexDirection: "row"
  },
  myBtResult: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",

  },
  myTotalText: {
    fontSize: 30,
    color: "red",
    margin: 10,
    fontWeight: "bold",
  },
  myWinText: {
    fontSize: 20,
    color: "green",
    margin: 10,
    fontWeight: "bold",
  },
  myDefText: {
    fontSize: 20,
    color: "red",
    margin: 10,
    fontWeight: "bold",
  },
  myTieText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  myVs: {
    fontSize: 20
  }
});
