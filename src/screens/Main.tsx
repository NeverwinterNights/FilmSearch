import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/store';
import {
  getFilmFullAnswerTH,
  getFilmsTH,
  getRandomFilmsTH,
} from '../store/slice';
import {FilmItem} from '../components/FilmItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppNavigation} from '../navigation/naviTypes';
import {DrawerActions} from '@react-navigation/native';
import {RootObjectRandom} from '../types/Types';

export const Main = () => {
  const dispatch = useAppDispatch();
  const allFilms = useAppSelector(state => state.root.allFilms.docs);
  const randomFilms = useAppSelector(state => state.root.randomFilms);
  const [filmName, setFilmName] = useState('');
  const navigation = useAppNavigation();

  // useEffect(() => {
  //   dispatch(getRandomFilmsTH());
  // }, [dispatch]);

  const onSearchHandler = () => {
    dispatch(getFilmFullAnswerTH(filmName))
    setFilmName('');
  };

  const findDirector = (randomFilm: RootObjectRandom) => {
    return randomFilm.persons.find(person => person.profession === 'режиссеры')
      ?.name;
  };

  return (
    <View style={styles.container}>
      {allFilms && (
        <ScrollView style={styles.itemsContainer}>
          {allFilms.map(item => (
            <FilmItem key={item.id} item={item} />
          ))}
        </ScrollView>
      )}
      {Object.keys(randomFilms).length > 0 && (
        <ImageBackground
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingVertical: 100,
          }}
          source={{
            uri:
              randomFilms.poster && randomFilms.poster.url
                ? randomFilms.poster.url
                : '',
          }}
          resizeMode={'cover'}>
          <View style={styles.randomInfo}>
            <Text numberOfLines={1} style={styles.randomTitle}>
              {randomFilms.name} ({randomFilms.alternativeName} )
            </Text>
            <Text style={styles.randomText}>
              реж. {findDirector(randomFilms)}. ({randomFilms.countries[0].name}
              ). Премьера {randomFilms.year}
            </Text>
          </View>
        </ImageBackground>
      )}
      <View style={styles.searchBoxContainer}>
        <MaterialCommunityIcons
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{paddingLeft: 10}}
          name="menu"
          color={'black'}
          size={26}
        />
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            value={filmName}
            style={{flex: 1, padding: 0}}
            onChangeText={setFilmName}
          />
          <Ionicons onPress={onSearchHandler} name="ios-search" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 55,
    backgroundColor: 'black',
    // paddingHorizontal: 10,
  },
  randomTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  randomText: {
    color: 'white',
    fontSize: 13,
    marginBottom: 4,
    textAlign: 'right',
  },
  randomInfo: {
    backgroundColor: 'rgba(0,0,0,0.61)',
    padding: 10,
    borderRadius: 10,
  },

  itemsContainer: {
    paddingTop: 55,
    paddingHorizontal: 10,
  },
  searchBoxContainer: {
    position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 30 : 10,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
