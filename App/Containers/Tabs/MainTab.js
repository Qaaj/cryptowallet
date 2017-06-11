/**
 * Created by janjorissen on 11.06.17.
 */

import React from 'react'
import {Button, ScrollView, View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/MainTabStyles';
import MainScreenComponent from '../../Components/MainScreenComponent';


class MainTab extends React.Component {

  constructor(props) {
    super(props)
    this.state = { pressStatus: false };
  }

  // onPress={() => navigation.navigate('Home')}
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  render() {
    const {navigation, activePairs} = this.props;

    let screen =
      <View><View style={styles.logo}><Icon name="rocket" size={50} color="white"/></View>
      <View style={{marginBottom: 20}}>
        <Text style={styles.text}>It seems you haven't added anything to your Portfolio yet.</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Portfolio')}
        activeOpacity={1}
        style={ this.state.pressStatus ? styles.buttonPress : styles.button }
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
      >
        <Text style={ this.state.pressStatus ? styles.welcomePress : styles.welcome }>Get started!</Text>
      </TouchableHighlight></View>

    if(activePairs.length !== 0)  {
      console.log(activePairs.asMutable());
      screen = <MainScreenComponent {...this.props}/>
    }

    return (
    <ScrollView style={styles.container}>
      {screen}
    </ScrollView>
  )
  }
}

MainTab.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{color: tintColor}}
    />
  ),
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    fetching: state.prices.fetching,
    price: state.prices.price,
    user: state.settings.user,
    activePairs: state.settings.activePairs
  }
}


export default connect(mapStateToProps)(MainTab);
