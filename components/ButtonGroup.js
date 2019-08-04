import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { defaultProps } from 'recompose';

// export default class ButtonGroup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text> ButtonGroup </Text>
//       </View>
//     );
//   }
// }
const CHOICES = [ { name: 'rock', 
                    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' }, 
                  { name: 'paper', 
                    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' }, 
                  { name: 'scissors', 
                    uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' 
                }];
function ButtonGroup (props){
    return(
        <View>
            {CHOICES.map(item =>{
                return(
                    <TouchableOpacity onPress={() =>props.onPressButton(item.name)} style={styles.buttonStyle} key={item.name}>
                        <Text style={styles.buttonText}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
const styles=StyleSheet.create({
    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
      },
      buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
      }

})
export default ButtonGroup;
