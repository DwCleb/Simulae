import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import Stepper, { StepperProps } from '~/components/UI/Stepper';

import darkTheme from '~/theme/ThemeContext/dark';
import { Steppers, PlansSteppers } from '../styles';

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const props: StepperProps = { length: 8, activeDotIndex: 8 };

const theme = darkTheme.theme;

const componentToTest = (componentProps: StepperProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Stepper {...componentProps} />
  </ThemeProvider>
);

describe('<Stepper />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest(props));
    root = wrapper.root;
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the correct structure with the default props', () => {
    expect(root.findAllByType(Steppers)).toHaveLength(1);

    expect(root.findAllByType(Steppers)[0].props.dotsLength).toEqual(props.length);
    expect(root.findAllByType(Steppers)[0].props.activeDotIndex).toEqual(props.activeDotIndex);
  });

  it('Should render correctly with plansStepper template', () => {
    const newProps = { ...props, templateStepper: 'plansStepper' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(PlansSteppers)).toHaveLength(1);

    expect(root.findAllByType(PlansSteppers)[0].props.dotsLength).toEqual(props.length);
    expect(root.findAllByType(PlansSteppers)[0].props.activeDotIndex).toEqual(props.activeDotIndex);
  });

  it('Should render correctly with wizard template', () => {
    const newProps = { ...props, templateStepper: 'wizard' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Stepper)[0].props.children).toBe(undefined);
  });

  it('Should render correctly with subwizardPrimary template', () => {
    const newProps = { ...props, templateStepper: 'subwizardPrimary' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Stepper)[0].props.children).toBe(undefined);
  });

  it('Should render correctly with subwizardSecondary template', () => {
    const newProps = { ...props, templateStepper: 'subwizardSecondary' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Stepper)[0].props.children).toBe(undefined);
  });
});
