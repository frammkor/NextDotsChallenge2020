import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  myButton: {
    backgroundColor: 'white',
  },
  MainContainer: {
    flex: 1,
  },
  ImgBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    margin: 15,
    minWidth: 300,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowRadius: 17,
  },
  titleTextField: {
    textAlign: 'center',
    flex: 1,
    marginLeft: 15,
  },
});

export default styles;
