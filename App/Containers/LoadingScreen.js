import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
} from 'react-native'
import {connect} from 'react-redux'
import styles from './Styles/LoadingScreen'
import { Colors } from '../Themes/'
import {Metrics} from '../Themes'
import { NavigationActions } from 'react-navigation'


class LoadingScreen extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
  }

  // static navigationOptions = {
  //   title: 'Welcome',
  // };

  constructor(props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      visible: true
    }
  }

  componentWillReceiveProps(props){
    if(this.state.visible && props.price && !props.fetching){
      const actionToDispatch = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'MainScreen' })]
      })
      // const navigateAction = NavigationActions.navigate({
      //       routeName: 'MainScreen',
      //     })
      this.props.navigation.dispatch(actionToDispatch)
      this.setState({visible:false});
    }
  }

  render() {

    var Spinner = require('react-native-spinkit');

    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center',alignItems: 'center'}}
                  style={[styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <View>
          <Text style={[styles.title]}>Cryptotracker</Text>
        </View>
        <View>
          <Spinner style={[styles.spinner]} isVisible={true} size={100} type='9CubeGrid' color={Colors.steel}/>
        </View>
        <View>
          <Text style={[styles.subTitle]}>v0.1c</Text>
        </View>

      </ScrollView >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    fetching: state.prices.fetching,
    price: state.prices.price,
    lastTime: state.prices.lastTime,
    time: state.prices.time,
    user: state.settings.user
  }
}

export default connect(mapStateToProps)(LoadingScreen)
