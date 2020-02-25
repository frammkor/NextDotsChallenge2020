import {StyleSheet} from 'react-native';
import {theme} from '../../../styles';

const {
  cancelButtonBackground,
  homeButtonBackground,
  errorTextColor,
} = theme.color;

const styles = StyleSheet.create({
  exploreScreenContainer: {
    flex: 1,
  },
  buttonsContainer: {
    justifyContent: 'space-around',
    alignContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  homeButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    padding: 15,
    borderRadius: 5,
    shadowRadius: 10,
    backgroundColor: homeButtonBackground,
  },
  cancelButton: {
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 3,
    margin: 15,
    padding: 15,
    borderRadius: 5,
    shadowRadius: 17,
    backgroundColor: cancelButtonBackground,
  },
  displayContainer: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 25,
    color: errorTextColor,
  },
  message: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default styles;
