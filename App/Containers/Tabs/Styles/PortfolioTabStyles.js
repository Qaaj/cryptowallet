/**
 * Created by janjorissen on 11.06.17.
 */
import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor: Colors.facebook,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    top: '40%',
    padding: 20
  },
  addText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    textDecorationLine: 'underline'
  },
  addButton:{
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 5,
    left: '50%',
    marginLeft: -20,
  },
  closeButton:{
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 20,
    right: 20,
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
});
