import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootObjectDocs} from '../types/Types';
import {useAppNavigation} from './navigations/naviTypes';

type FilmItemPropsType = {
  item: RootObjectDocs;
};

export const FilmItem = ({item}: FilmItemPropsType) => {
  const navigation = useAppNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('CurrentFilm', {info: item})}
      style={styles.container}>
      {item.poster && item.poster.url && (
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{uri: item.poster.url}}
        />
      )}
      <Text style={styles.title}>
        {item.name} (англ. {item.alternativeName})
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.type}>
          Тип:{item.type === 'movie' ? 'Кинофильм' : item.type}
        </Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.rate}>Рейтинг IMDB: {item.rating.imdb}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6d9d9',
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
  },
  type: {},
  rate: {},
  year: {},
});
