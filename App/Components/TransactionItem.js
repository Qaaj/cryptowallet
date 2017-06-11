import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class TransactionItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <View style={{height: 40, padding: 10, margin: 10, backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}> {this.props.data.amount} ETH
          x {this.props.data.price}{'\u20AC'}</Text>
        <View style={{position: 'absolute', right: 20, height: 30}}>
          <TouchableHighlight underlayColor='rgba(255, 255, 255, 0)' onPress={() => {
            this.props.removeItem(this.props.data.uuid);
          }}>
            <Ionicons name="ios-close" size={40} color="white"/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
