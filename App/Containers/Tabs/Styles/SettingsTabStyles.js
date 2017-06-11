/**
 * Created by janjorissen on 11.06.17.
 */
import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../../Themes/'

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor: Colors.facebook,
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});
