import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CurrentFilmPropsType} from '../components/navigations/naviTypes';

export const CurrentFilm = ({route}: CurrentFilmPropsType) => {
  const {info} = route.params;

  return (
    <ImageBackground source={{uri: info.poster.url}} style={styles.container}>
      <View>
        <Text>ggggggggg</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
