import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/store';
import {getFilmsTH} from '../store/slice';
import {FilmItem} from '../components/FilmItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Main = () => {
  const dispatch = useAppDispatch();
  const allFilms = useAppSelector(state => state.root.allFilms.docs);
  const [filmName, setFilmName] = useState('');

  useEffect(() => {
    dispatch(getFilmsTH('Не время умирать'));
    // getFilmRequest();
  }, [dispatch]);

  const onSearchHandler = () => {
    dispatch(getFilmsTH(filmName));
    setFilmName('');
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
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex: 1, padding: 0}}
          onChangeText={setFilmName}
        />
        <Ionicons onPress={onSearchHandler} name="ios-search" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: 'black',
  },
  itemsContainer: {
    paddingHorizontal: 10,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
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
