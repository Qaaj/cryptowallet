/**
 * Created by janjorissen on 11.06.17.
 */

import React from 'react'
import {StackNavigator} from 'react-navigation'
import {TouchableHighlight, StyleSheet, View, Text, ListView} from 'react-native';
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles/PortfolioTabStyles';
import AddPairComponent from '../../Components/AddPair';
import TransactionItem from '../../Components/TransactionItem';
import SettingActions from '../../Redux/SettingRedux';


import {Colors} from './../../Themes/'


const style = StyleSheet.create({
  valuetext: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    marginLeft: 10
  }
});

class MainPortfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {navigation, activePairs} = this.props;
    console.log(this.props);

    let screen = <Text style={styles.text}>Press the button below to add your first coins.</Text>;

    if (activePairs.length !== 0) {

      let items = activePairs.map((item,i) => <TransactionItem removeItem={this.props.removePair} key={'trans_'+i} data={item}/>)

      screen = <View>
        <Text style={style.valuetext}>Transactions</Text>
        <View style={{flexDirection: 'column', width: '100%'}}>
          {items}
        </View>
      </View>

    }

    return (
      <View style={{flex: 1}}>
        <View contentContainerStyle={{alignItems: 'center', justifyContent: 'center', flex: 1}}
              style={styles.container}>
          {screen}
        </View>
        <View style={styles.addButton}>
          <TouchableHighlight onPress={() => navigation.navigate('AddPair')}>
            <Ionicons name="md-add-circle" size={50} color="white"/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

class AddPair extends React.Component {

  constructor(props) {
    super(props)
    this.state = {pressStatus: false, pair: null};
  }

  _onHideUnderlay() {
    this.setState({pressStatus: false});
  }

  _onShowUnderlay() {
    this.setState({pressStatus: true});
  }

  render() {

    const {navigation} = this.props;
    console.log(this.state);

    let extraInfo = null;

    if (this.state.pair) extraInfo = <AddPairComponent addPair={this.props.addPair} navigation={navigation}/>

    return (
      <View style={{flex: 1}}>
        <View contentContainerStyle={{alignItems: 'left'}} style={styles.container}>
          <Text style={styles.addText}>Available Pairs</Text>
          <TouchableHighlight
            onPress={() => this.setState({pressStatus: true, pair: "ETHEUR"})}
            activeOpacity={1}
            style={ [this.state.pressStatus ? styles.buttonPress : styles.button, {marginTop: 20}] }
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}
          >
            <Text style={ this.state.pressStatus ? styles.welcomePress : styles.welcome }>ETH/EUR</Text>
          </TouchableHighlight>
          {extraInfo}
        </View>
        <View style={styles.closeButton}>
          <TouchableHighlight onPress={() => navigation.goBack()}>
            <Ionicons name="ios-close" size={50} color="white"/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    fetching: state.prices.fetching,
    price: state.prices.price,
    user: state.settings.user,
    activePairs: state.settings.activePairs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPair: (data) => dispatch(SettingActions.addPair(data)),
    removePair: (data) => dispatch(SettingActions.removePair(data))
  }
}

AddPair = connect(mapStateToProps, mapDispatchToProps)(AddPair)
MainPortfolio = connect(mapStateToProps,mapDispatchToProps)(MainPortfolio)

const ModalStack = StackNavigator({
  MainPortfolio: {
    screen: MainPortfolio,
  },
  AddPair: {
    path: 'AddPair',
    screen: AddPair,
  },
}, {
  initialRouteName: 'MainPortfolio',
  mode: 'modal',
  headerMode: 'none',
});


ModalStack.navigationOptions = {
  tabBarLabel: 'Portfolio',
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
      size={26}
      style={{color: tintColor}}
    />
  ),
};


export default ModalStack;
