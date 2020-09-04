import React from 'react';

import { Steppers, PlansSteppers } from './styles';

export interface StepperProps {
  length?: number;
  activeDotIndex: number;
  templateStepper?: string;
}

export default function Stepper({ templateStepper, length, activeDotIndex, ...props }: StepperProps): JSX.Element {
  switch (templateStepper) {
    case 'plansStepper':
      return (
        <PlansSteppers
          dotsLength={length}
          activeDotIndex={activeDotIndex}
          inactiveDotOpacity={1}
          inactiveDotScale={0.9}
          {...props}
        />
      );

    default:
      return (
        <Steppers
          dotsLength={length}
          activeDotIndex={activeDotIndex}
          inactiveDotOpacity={1}
          inactiveDotScale={0.9}
          {...props}
        />
      );
  }
}
