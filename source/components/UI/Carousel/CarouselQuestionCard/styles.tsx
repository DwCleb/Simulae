import styled from 'styled-components/native';
import { SteppersColors, StepperLength } from '~/components/UI/Stepper/styles';

export const Container = styled.View`
  /* flex: 1; */
  height: 70%;
  background-color: white;
  shadow-color: #000;
  shadow-offset: 0px -8px;
  shadow-opacity: 0.25;
  shadow-radius: 8px;
  elevation: 6;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-top-color: ${({ cardIndex }): string =>
    SteppersColors[cardIndex >= 7 ? cardIndex - StepperLength : cardIndex] || 'red'};
  border-top-width: 10px;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IllustrationContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CarouselImage = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  border-radius: 80px;
  /* margin: ${20}px 0px; */
  align-self: center;
  width: 100px;
  height: 100px;
  /* width: ${({ width }): number | string => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({
    height,
  }): number | string => (typeof height === 'number' ? `${height}px` : height)}; */
`;
