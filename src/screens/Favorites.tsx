import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GoBackIcon} from '../components/GoBackIcon';

type FavoritesPropsType = {};

export const Favorites = ({}: FavoritesPropsType) => {
  return (
    <View style={styles.container}>
      <GoBackIcon />
      <Text>Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
