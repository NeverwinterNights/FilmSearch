import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppNavigation} from '../navigation/naviTypes';

export const GoBackIcon = () => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.round}>
      <MaterialCommunityIcons
        onPress={() => navigation.goBack()}
        name="arrow-left"
        size={20}
        color={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  round: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    position: 'absolute',
    // backgroundColor: 'rgba(255,255,255,0.41)',
    backgroundColor: 'black',
    top: 14,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
