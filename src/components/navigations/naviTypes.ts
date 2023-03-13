import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootObjectDocs} from '../../types/Types';

export type RootStackParamList = {
  Main: undefined;
  CurrentFilm: {info: RootObjectDocs};
};

export type NavigationUseType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<NavigationUseType>();

export type CurrentFilmPropsType = NativeStackScreenProps<
  RootStackParamList,
  'CurrentFilm'
>;
