import styled from 'styled-components/native';
import { Platform, I18nManager } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { Metrics, ThemeType } from '~/theme';

const { isRTL } = I18nManager;

interface ButtonProps {
  accessibilityLabel: string;
  style: object;
  opacity: number;
  variant: string;
  disabled: boolean;
  small: boolean;
  distance?: number[];
  background?: string;
}
type Props = ButtonProps & { theme: ThemeType };

function getBackgroundColor({ disabled, theme, variant }: Props): string {
  const primary = theme.button.background.primary.active;
  const primaryDisabled = theme.button.background.primary.disabled;

  const primaryOutlined = theme.button.background.primaryOutlined.active;
  const primaryOutlinedDisabled = theme.button.background.primaryOutlined.disabled;

  const secondary = theme.button.background.secondary.active;
  const secondaryDisabled = theme.button.background.secondary.disabled;

  const secondaryOutlined = theme.button.background.secondaryOutlined.active;
  const secondaryOutlinedDisabled = theme.button.background.secondaryOutlined.disabled;

  if (disabled) {
    switch (variant) {
      case 'primary':
        return primaryDisabled;
      case 'secondaryDisabled':
        return secondaryDisabled;
      case 'secondaryOutlinedDisabled':
        return secondaryOutlinedDisabled;
      case 'primaryOutlinedDisabled':
        return primaryOutlinedDisabled;
      default:
        return '';
    }
  } else {
    switch (variant) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      case 'secondaryOutlined':
        return secondaryOutlined;
      case 'primaryOutlined':
        return primaryOutlined;
      default:
        return '';
    }
  }
}

function getBorderColor({ disabled, theme, variant }: Props): string {
  const primary = theme.button.border.primary.active;
  const primaryDisabled = theme.button.border.primary.disabled;

  const primaryOutlined = theme.button.border.primaryOutlined.active;
  const primaryOutlinedDisabled = theme.button.border.primaryOutlined.disabled;

  const secondary = theme.button.border.secondary.active;
  const secondaryDisabled = theme.button.border.secondary.disabled;

  const secondaryOutlined = theme.button.border.secondaryOutlined.active;
  const secondaryOutlinedDisabled = theme.button.border.secondaryOutlined.disabled;

  if (disabled) {
    switch (variant) {
      case 'primary':
        return primaryDisabled;
      case 'secondaryDisabled':
        return secondaryDisabled;
      case 'secondaryOutlinedDisabled':
        return secondaryOutlinedDisabled;
      case 'primaryOutlinedDisabled':
        return primaryOutlinedDisabled;
      default:
        return '';
    }
  } else {
    switch (variant) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      case 'secondaryOutlined':
        return secondaryOutlined;
      case 'primaryOutlined':
        return primaryOutlined;
      default:
        return '';
    }
  }
}

function getIitleColor({ disabled, theme, variant }: Props): string {
  const primary = theme.button.title.primary.active;
  const primaryDisabled = theme.button.title.primary.disabled;

  const primaryOutlined = theme.button.title.primaryOutlined.active;
  const primaryOutlinedDisabled = theme.button.title.primaryOutlined.disabled;

  const secondary = theme.button.title.secondary.active;
  const secondaryDisabled = theme.button.title.secondary.disabled;

  const secondaryOutlined = theme.button.title.secondaryOutlined.active;
  const secondaryOutlinedDisabled = theme.button.title.secondaryOutlined.disabled;

  if (disabled) {
    switch (variant) {
      case 'primary':
        return primaryDisabled;
      case 'secondaryDisabled':
        return secondaryDisabled;
      case 'secondaryOutlinedDisabled':
        return secondaryOutlinedDisabled;
      case 'primaryOutlinedDisabled':
        return primaryOutlinedDisabled;
      default:
        return '';
    }
  } else {
    switch (variant) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      case 'secondaryOutlined':
        return secondaryOutlined;
      case 'primaryOutlined':
        return primaryOutlined;
      default:
        return '';
    }
  }
}

function getHeight({ small }: Props): number {
  if (small) {
    return 38;
  } else {
    return 50;
  }
}

function getWidth({ small }: Props): number {
  if (small) {
    return Metrics.screen.width * 0.45;
  } else {
    return Metrics.screen.width * 0.9;
  }
}

function getMargin({ distance }: Props): string {
  if (!distance) {
    return `${10}px ${5}px ${10}px ${5}px`;
  } else {
    switch (distance.length || 0) {
      case 1:
        return `${distance[0]}px`;
      case 2:
        return `${distance[0]}px ${distance[1]}px`;
      case 3:
        return `${distance[0]}px ${distance[1]}px ${distance[2]}px`;
      case 4:
        return `${distance[0]}px ${distance[1]}px ${distance[2]}px ${distance[3]}px`;
      default:
        return '0px';
    }
  }
}

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ disabled, theme, variant }: Props) => ({
  color: getIitleColor({ disabled, theme, variant }),
  size: 'large',
}))``;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IOSCustomButton = styled.TouchableOpacity.attrs((props: Props) => ({
  activeOpacity: props.opacity,
  accessibilityLabel: props.accessibilityLabel,
  style: props.style,
}))`
  flex-direction: row;
  align-items: center;
  height: ${(props: Props): number => getHeight(props)};
  justify-content: center;
  border-width: ${1};
  border-radius: ${8};
  width: ${(props: Props): number => getWidth(props)};
  border-color: ${(props: Props): string => getBorderColor(props)};
  margin: ${(props: Props): string => getMargin(props)};
  background-color: ${(props: Props): string => getBackgroundColor(props)};
  align-self: center;
`;

export const AndroidCustomButton = styled.TouchableNativeFeedback.attrs((props: Props) => ({
  accessibilityLabel: props.accessibilityLabel,
  style: props.style,
}))``;

export const AndroidCustomContentButton = styled.View.attrs((props: Props) => ({
  background: props.background,
  accessibilityLabel: props.accessibilityLabel,
  style: props.style,
}))`
  flex-direction: row;
  align-items: center;
  height: ${(props: Props): number => getHeight(props)};
  justify-content: center;
  border-width: ${1};
  border-radius: ${8};
  width: ${(props: Props): number => getWidth(props)};
  border-color: ${(props: Props): string => getBorderColor(props)};
  margin: ${(props: Props): string => getMargin(props)};
  background-color: ${(props: Props): string => getBackgroundColor(props)};
  align-self: center;
`;

export const TitleButton = styled.Text.attrs((props: Props) => ({
  style: props.style,
  numberOfLines: 1,
}))`
  color: ${(props: Props): string => getIitleColor(props)};
  font-size: 14px;
  line-height: 26px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
`;

interface IconProps {
  name: string;
  logo: boolean;
  ios: boolean;
  md: boolean;
  iconSize: boolean;
  noRTL: boolean;
  iconColor: string;
  direction: string;
}

const platform = Platform.OS === 'ios' ? 'ios' : 'md';

export const Icon = styled(IonIcon).attrs(({ name, logo, ios, md, iconSize, noRTL }: IconProps) => {
  const platformOS = ios ? 'ios' : md ? 'md' : logo ? 'logo' : platform;

  const iconName = `${platformOS}-${name}`;

  return {
    name: iconName,
    logo,
    styleIcon: { transform: [{ scaleX: !noRTL && isRTL ? -1 : 1 }] },
    size: iconSize || 22,
  };
})`
  color: ${(props: IconProps): string => props.iconColor || 'white'};
  margin-left: ${(props: IconProps): number =>
    props.direction === 'start' ? 8 : Platform.select<number>({ android: 10, ios: 8 }) || 8};
  margin-right: ${(props: IconProps): number => {
    const marginRight =
      props.direction === 'start'
        ? Platform.select<number>({ android: 10, ios: 8 })
        : Platform.select<number>({ android: 1, ios: 8 });

    return marginRight || 8;
  }};
`;

export const rippleOverlay = 'rgba(0, 0, 0, 0, 0.6)';
