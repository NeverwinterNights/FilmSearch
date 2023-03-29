import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {CurrentFilmPropsType} from '../navigation/naviTypes';
import {AddToFavoritesIcon} from '../components/AddToFavoritesIcon';
import {GoBackIcon} from '../components/GoBackIcon';

export const CurrentFilm = ({route}: CurrentFilmPropsType) => {
  const {info} = route.params;

  return (
    <ImageBackground
      source={{uri: info.poster.url}}
      resizeMode={'stretch'}
      style={styles.container}>
      <GoBackIcon />
      <AddToFavoritesIcon
        handlePress={() => console.log('AddToFavorites')}
        imgUrl={require('../assets/icons/heart.png')}
        right={5}
        top={14}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
