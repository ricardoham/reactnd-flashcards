import { StyleSheet } from 'react-native';
import { blue, red } from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyle: {
    fontWeight: 'bold',
    borderBottomColor: 'black',
  },
  submit: {
    margin: 5,
    backgroundColor: blue,
  },
  cancel: {
    margin: 5,
    backgroundColor: red,
  },
});
