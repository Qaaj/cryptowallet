import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: Colors.facebook
  },
  title:{
    fontSize: 30,
    color: Colors.steel,
    position: 'relative',
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  spinner: {
    width:100,
    marginTop: 50
  },
  subTitle: {
    fontSize: 15,
    color: Colors.steel,
    position: 'relative',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    opacity: .4,
    marginTop: 20
  }
})
