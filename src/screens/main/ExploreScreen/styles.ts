import {StyleSheet} from 'react-native';

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
    backgroundColor: 'mediumseagreen',
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
    backgroundColor: 'crimson',
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
    color: 'red',
  },
  message: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default styles;
