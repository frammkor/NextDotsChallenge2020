export {default as HomeScreen} from './main/HomeScreen';
export {default as ExploreScreen} from './main/ExploreScreen';

export const goToScreen = (navigation: any, screenName: string) => {
  navigation.navigate(screenName);
};
