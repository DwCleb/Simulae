import { Animated, Easing, I18nManager } from 'react-native';
import {
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
} from '@react-navigation/stack/lib/typescript/src/types';

export const transitionConfig = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    close: {
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    transitionStyle: 'inverted',
  },
  cardStyleInterpolator: ({ current, layouts }: StackCardInterpolationProps): StackCardInterpolatedStyle => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: I18nManager.isRTL ? [-layouts.screen.width, 0] : [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
