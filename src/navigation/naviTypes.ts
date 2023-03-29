import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootObjectDocs} from '../types/Types';

export type RootStackParamList = {
  Main: undefined;
  CurrentFilm: {info: RootObjectDocs};
  Favorites: undefined;
};

export type NavigationUseType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<NavigationUseType>();

export type CurrentFilmPropsType = NativeStackScreenProps<
  RootStackParamList,
  'CurrentFilm'
>;

export type RootDrawerParamList = {
  Routes: NavigatorScreenParams<RootStackParamList>;
};
