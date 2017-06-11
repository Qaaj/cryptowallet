import React from 'react'
import { TextInput, Text, View, Button } from 'react-native'


export default class AddPair extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }
  render () {
    return (
      <View style={{height: 180, padding:10, margin: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>How many ETH would you like to add?</Text>
        <View style={{marginTop: 10, borderWidth: 1, borderColor:'rgba(255, 255, 255, 0.1)'}}>
        <TextInput
          style={{height: 30, padding: 5, color: 'white'}}
          editable = {true}
          maxLength = {40}
          onChangeText={(amount) => this.setState({amount})}
        />
        </View>
        <Text style={{marginTop: 10,color: 'white', fontSize: 14, fontWeight: 'bold'}}>What price did you pay per ETH?</Text>
        <View style={{marginTop: 10, borderWidth: 1, borderColor:'rgba(255, 255, 255, 0.1)'}}>
          <TextInput
            style={{height: 30, padding: 5, color: 'white'}}
            editable = {true}
            maxLength = {40}
            onChangeText={(price) => this.setState({price})}
          />
        </View>
        <Button
          title="Done"
          color="white"
          onPress={()=>{
            if(!this.state.amount || !this.state.price) return;
            const timeStamp = new Date().getTime();
            const uuid =  timeStamp + '_' + Math.round(Math.random() * 10000000);
            this.props.addPair({type: 'ETH/EUR', amount: this.state.amount, price: this.state.price, uuid});
            this.props.navigation.goBack()
          }}
        />
      </View>
    )
  }
}
