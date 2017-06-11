/**
 * Created by janjorissen on 11.06.17.
 */
import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Containers/Tabs/Styles/MainTabStyles';
import numeral from 'numeral';

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  textcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  valuetext:{
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  }
});

export default class MainScreenComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    console.log(this.props);

    let basecost = 0;

    let numcoins = this.props.activePairs.reduce((p,c) => {
      basecost = basecost + (parseInt(c.amount) * parseInt(c.price));
      p = parseInt(c.amount) + p;
      return p;
    },0)
    const value = numcoins * this.props.price;
    const profit = value - basecost;

    return (
      <View>
        <View style={[styles.logo, {marginTop: 40}]}><Icon name="coins" size={50} color="white"/></View>
        <View style={[styles.logo, {marginTop: 50}]}></View>
        <View style={style.textcontainer}>
          <Ionicons name="md-arrow-round-up" size={30} color="green"/>
          <Text style={{fontSize: 20, color: 'white', marginLeft: 10}}>{numeral(profit).format('0,0.00')} {'\u20AC'}</Text>
        </View>
        <View style={style.container}>
          <Text style={style.valuetext}>{numeral(value).format('0,0.00')} {'\u20AC'}</Text>

        </View>
        <View style={[styles.logo, {marginTop: 20}]}>
          <Text style={{color: 'rgba(255, 255, 255, 0.2)' }}>{numcoins} ETH</Text>
        </View>
        <View style={[styles.logo, {marginTop: 10}]}>
          <Text style={{color: 'rgba(255, 255, 255, 0.2)' }}>1 ETH = {this.props.price} {'\u20AC'}</Text>
        </View>
      </View>
    )
  }
}
