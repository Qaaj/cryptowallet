/**
 * Created by janjorissen on 11.06.17.
 */

import React from 'react'
import {Button, ScrollView, View, Text} from 'react-native';
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles/SettingsTabStyles';

class SettingsTab extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    )
  }
}

SettingsTab.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
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
    user: state.settings.user
  }
}


export default connect(mapStateToProps)(SettingsTab);
