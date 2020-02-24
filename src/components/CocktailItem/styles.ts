import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'black',
    overflow: 'hidden',
    borderRadius: 10,
    width: '48%',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drinkName: {
    margin: 5,
    fontSize: 24,
    color: 'white',
  },
  drinkImage: {
    width: '100%',
    height: 200,
  },
});

export default styles;
