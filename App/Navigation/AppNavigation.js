import {StackNavigator, TabNavigator} from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import LoadingScreen from '../Containers/LoadingScreen'

import styles from './Styles/NavigationStyles'



// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoadingScreen: {screen: LoadingScreen},
  MainScreen: {screen: MainScreen},
}, {
  // Default config for all screens
  initialRouteName: 'LoadingScreen',
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
