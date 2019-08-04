import React, { Component, useState, useEffect  } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const ConversionTypeButton = props => {
  const fromFlag = props.from === 'usd' ? 'USD' : 'VN';
  const toFlag = props.to === 'usd' ? 'VN' : 'USD';
  return (
    <TouchableOpacity onPress={props.onPressx} style={styles.button}>
      <Text>{fromFlag} to {toFlag}</Text>
    </TouchableOpacity>
  );
};


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myVal:"",
      fromCurrency:0,
      myRelsult:0,
    }
  }
  convertCurrency = () => {
    let value;
    
    // if (fromCurrency === 'vnd') {
    //   value = currentCurrencyValue / 23000;
    // } else {
    //   value = 23000 * currentCurrencyValue;
    // }
    console.log("da toi day")
    this.setState ({
      myRelsult: this.state.myVal/23000
    })
  };
  setFromCurrencyValue =(val) =>{
    this.setState({
      myVal:val,
    })
  }
  
  render() {
    return (
      <View style={styles.container} >
        <Text>Please enter the value of the currency you want to convert</Text>
        <TextInput
          style={styles.myInput}
          textAlign="center"
          autoFocus={true}
          placeholder="Please insert your value..."
          selectionColor="red"
          onChangeText={(val) => this.setFromCurrencyValue(val)}
        />
        <ConversionTypeButton from="VND" to="USD" onPressx={this.convertCurrency}/>
        <ConversionTypeButton from="USD" to="VND" />
          <Text>Current currency:</Text>
          <Text style={styles.currencyText}>{this.state.myRelsult}</Text>
          <Text>Conversion currenecy:</Text>
          <Text style={styles.currencyText}>0.00</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  myInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  }
});
