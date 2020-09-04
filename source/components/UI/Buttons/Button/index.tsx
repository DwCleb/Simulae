import React, { Fragment } from 'react';
import { Platform, TouchableNativeFeedback, I18nManager } from 'react-native';
import {
  Icon,
  RowView,
  TitleButton,
  rippleOverlay,
  IOSCustomButton,
  AndroidCustomButton,
  AndroidCustomContentButton,
  ActivityIndicator,
} from './styles';
import { useTheme } from '~/theme';

export interface Props {
  title?: React.ReactNode;
  titleStyle?: object;
  buttonStyle?: object;
  opacity?: number;
  accessibilityLabel?: string;
  variant?: string;
  themeVariants?: { [key: string]: string; light: string; dark: string };
  justIcon?: boolean;
  iconName?: string;
  iconDirection: string;
  iconSize?: number;
  iconColor?: string;
  styleIcon?: object;
  logo?: boolean;
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[];
  small?: boolean;
  distance?: number[];
  isLoading?: boolean;
  onPress(): void;
}

const iconPay = Platform.OS === 'ios' ? 'apple' : 'google';

const calculateVariant = (
  themeMode: string,
  variant: string,
  themeVariants?: { [key: string]: string; light: string; dark: string }
): string => {
  if (themeVariants && themeVariants.light && themeVariants.dark && themeMode) {
    return themeVariants[themeMode];
  }

  return variant;
};

function Button({
  children,
  title,
  styleIcon,
  justIcon,
  iconDirection,
  iconName,
  iconSize,
  iconColor,
  buttonStyle,
  titleStyle,
  opacity,
  accessibilityLabel,
  logo,
  variant = 'primary',
  themeVariants,
  disabled,
  small,
  isLoading,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme();

  const customAccessibilityLabel = accessibilityLabel || `Button ${title}`;
  const computedVariant = calculateVariant(theme.mode || 'dark', variant, themeVariants);

  // get a possible icon to render a button
  function getIcon(direction: string): JSX.Element {
    // Mount paymentIcon by OS Platform

    if (computedVariant === 'pay') {
      return (
        <Icon
          direction="start"
          name={iconPay}
          size={iconSize || 30}
          color={iconColor || 'white'}
          logo
          noRTL
          styleIcon={styleIcon}
        />
      );
    }

    if (iconName) {
      return (
        <Icon
          direction={direction}
          name={iconName}
          size={iconSize}
          color={iconColor}
          logo={logo}
          styleIcon={styleIcon}
        />
      );
    }

    return <Fragment />;
  }

  // Get title of button component
  function getTitle(): JSX.Element {
    let customTitle = title;

    if (isLoading) {
      return <ActivityIndicator disabled={disabled} variant={computedVariant} />;
    }

    if (computedVariant === 'pay') {
      customTitle = 'Pay';
      if (I18nManager.isRTL) {
        iconDirection = 'end';
      }
    }

    const buttonIcon = getIcon(iconDirection);

    // Return just a icon content
    if (justIcon) {
      return buttonIcon;
    }

    // Return title content and specific icon position if require
    return (
      <RowView pointerEvents={disabled ? 'none' : 'auto'}>
        {iconDirection === 'start' ? buttonIcon : <Fragment />}
        <TitleButton variant={computedVariant} style={titleStyle} disabled={disabled} {...rest}>
          {customTitle}
        </TitleButton>
        {iconDirection === 'end' ? buttonIcon : <Fragment />}
      </RowView>
    );
  }

  // Mount the iOS button
  const iOSButton: JSX.Element = (
    <IOSCustomButton
      variant={computedVariant}
      style={buttonStyle}
      activeOpacity={opacity}
      accessibilityLabel={customAccessibilityLabel}
      disabled={disabled}
      small={small}
      {...rest}
    >
      {children || getTitle()}
    </IOSCustomButton>
  );

  // Mount the Android button
  const AndroidButton: JSX.Element = (
    <AndroidCustomButton
      background={TouchableNativeFeedback.Ripple(rippleOverlay, false)}
      accessibilityLabel={customAccessibilityLabel}
      style={buttonStyle}
      disabled={disabled}
      {...rest}
    >
      <AndroidCustomContentButton
        variant={computedVariant}
        style={buttonStyle}
        activeOpacity={opacity}
        accessibilityLabel={customAccessibilityLabel}
        small={small}
        disabled={disabled}
        {...rest}
      >
        {children || getTitle()}
      </AndroidCustomContentButton>
    </AndroidCustomButton>
  );

  // Return especifc button based on current platform
  return (
    Platform.select<JSX.Element>({
      android: AndroidButton,
      ios: iOSButton,
    }) || <Fragment />
  );
}

/**
 * Button defaultProps
 */
Button.defaultProps = {
  disabled: false,
  iconDirection: 'start',
  opacity: 0.6,
  variant: 'primary',
  small: false,
};

export default Button;
