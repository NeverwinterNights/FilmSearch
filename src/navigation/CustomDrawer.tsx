import React from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Feather from 'react-native-vector-icons/Feather';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      easing: Easing.inOut(Easing.quad),
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      easing: Easing.inOut(Easing.quad),
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.info}>
              <Image
                source={{uri: 'https://b1.filmpro.ru/c/553369.700xp.jpg'}}
                style={styles.image}
              />
              <View style={{marginLeft: 15}}>
                <Text style={styles.title}>Вася Пупки</Text>
                <Text style={styles.caption}>Что то нечитаемое</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>0</Text>
                <Text style={styles.caption}>Watching</Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>0</Text>
                <Text style={styles.caption}>Favorites</Text>
              </View>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              onPress={() => props.navigation.navigate('Main')}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label={'Search'}
            />
            <DrawerItem
              onPress={() => props.navigation.navigate('Favorites')}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label={'Favorites'}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
          <Animated.View style={[{flexDirection: 'row', opacity: animated}]}>
            <MaterialCommunityIcons
              name="exit-to-app"
              color={'black'}
              size={20}
              style={{marginRight: 10}}
              onPress={() => console.log('Sign Out')}
            />
            <Text>Sign Out</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  info: {
    flexDirection: 'column',
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  userInfoSection: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
