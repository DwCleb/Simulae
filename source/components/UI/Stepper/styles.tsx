import styled from 'styled-components/native';
import { Pagination } from 'react-native-snap-carousel';

import { Colors, ThemeContextType } from '~/theme';

import { StepperProps } from './index';

const { blue, red, orange } = Colors.theme.primary;

const { green, yellow } = Colors.theme.alerts;

export const SteppersColors = [blue, red, orange, green, yellow];

export const StepperLength = SteppersColors.length;

// FIXME: this is a workaround, we should use StyleComponents types
type ThemedStepperProps = StepperProps & ThemeContextType;

export const Steppers = styled(Pagination).attrs(({ activeDotIndex, theme }: ThemedStepperProps) => ({
  dotColor: SteppersColors[activeDotIndex >= 7 ? activeDotIndex - StepperLength : activeDotIndex],
  dotStyle: {
    width: 35,
    height: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: [0, -8],
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: [0, -8],
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  containerStyle: { paddingTop: 20 },
  inactiveDotColor: theme.monochromatic.white,
}))``;

const plansStepperColors = [orange, blue, yellow];

export const PlansSteppers = styled(Pagination).attrs(({ activeDotIndex, theme }: ThemedStepperProps) => ({
  dotColor: plansStepperColors[activeDotIndex >= 3 ? activeDotIndex - StepperLength : activeDotIndex],
  dotStyle: {
    width: 20,
    height: 5,
    borderRadius: 50,
  },
  inactiveDotStyle: {
    width: 5,
    height: 5,
    borderRadius: 50,
  },
  containerStyle: { position: 'absolute', bottom: 0, alignSelf: 'center' },
  inactiveDotColor: theme.monochromatic.white,
}))``;
