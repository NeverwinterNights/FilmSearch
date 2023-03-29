import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type AddToFavoritesIconPropsType = {
  imgUrl: ImageSourcePropType;
  handlePress: () => void;
};

export const AddToFavoritesIcon = ({
  imgUrl,
  handlePress,
  ...restProps
}: AddToFavoritesIconPropsType & ViewStyle) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        // ...SHADOWS.light,
        ...restProps,
      }}
      onPress={handlePress}>
      <Image
        // source={imgUrl}
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};
