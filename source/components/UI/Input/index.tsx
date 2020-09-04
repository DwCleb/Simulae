import React, { forwardRef, useState, useEffect } from 'react';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaskedInput, TextInput } from './styles';

import { Colors } from '~/theme';

function Input(
  {
    dark,
    name,
    distance,
    onChange,
    label,
    type,
    value,
    weight,
    placeholder,
    accessibilityLabel,
    keyboardType,
    ...rest
  },
  ref
): JSX.Element {
  accessibilityLabel = `Campo de texto ${label || placeholder || name}`;

  const [isFocused, setIsFocused] = useState(false);

  const animatedIsFocused = new Animated.Value(value || isFocused ? 1 : 0);

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: (isFocused || value !== undefined) && (isFocused || value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedIsFocused, isFocused, name, value]);

  const labelStyle = {
    position: 'absolute',
    left: 2,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [distance ? distance[1] + 25 : 25, 8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: dark
        ? [Colors.theme.primary.purple, Colors.theme.primary.purple]
        : [Colors.theme.monochromatic.lightGrey, Colors.theme.monochromatic.altGrey],
    }),
  };

  function handleFocus(): void {
    Animated.timing(animatedIsFocused, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setIsFocused(true);
    }, 200);
  }

  function handleBlur(): void {
    Animated.timing(animatedIsFocused, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      {type ? (
        <MaskedInput
          dark={dark}
          value={value}
          onChangeText={(text: string): void => onChange({ value: text, name })}
          placeholder={placeholder}
          type={type}
          {...rest}
          ref={ref}
          onFocus={(): void => handleFocus()}
          onBlur={(): void => handleBlur()}
          keyboardType={keyboardType}
          accessibilityLabel={accessibilityLabel}
        />
      ) : (
        <TextInput
          dark={dark}
          value={value}
          onChangeText={(text: string): void => onChange({ value: text, name })}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          onFocus={(): void => handleFocus()}
          onBlur={(): void => handleBlur()}
          keyboardType={keyboardType}
          accessibilityLabel={accessibilityLabel}
        />
      )}
      {/* <View style={{ marginTop: 2, marginBottom: 10 }}>
        <Typography type={TypographyType.L1}></Typography>
      </View> */}
    </View>
  );
}

Input.defaultProps = {
  type: '',
  weight: false,
  keyboardType: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  weight: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  distance: PropTypes.number.isRequired,
};

export default forwardRef(Input);
