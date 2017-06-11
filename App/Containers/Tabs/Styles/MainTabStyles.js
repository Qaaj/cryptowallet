/**
 * Created by janjorissen on 11.06.17.
 */
import {StyleSheet, Platform} from 'react-native'
import {Colors} from '../../../Themes/'

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor: Colors.facebook,
    padding: 20,
    paddingTop: 40
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center'
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  welcomePress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  button: {
    borderColor: '#344766',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#344766',
  },
  buttonPress: {
    borderColor: '#344766',
    backgroundColor: '#163e66',
    borderWidth: 1,
    borderRadius: 0,
  }
});
