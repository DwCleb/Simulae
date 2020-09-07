import styled from 'styled-components/native';
import { SteppersColors, StepperLength } from '~/components/UI/Stepper/styles';
import { Metrics } from '~/theme';

export const Container = styled.View`
  flex: 1;
  min-height: ${Metrics.screen.height * 0.7};
  background-color: white;
  shadow-color: #000;
  shadow-offset: 0px -8px;
  shadow-opacity: 0.25;
  shadow-radius: 8px;
  elevation: 6;
  border-radius: 12px;
  border-top-color: ${({ theme }): string => theme.primary.blue};
  border-top-width: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.altGrey};
`;

export const IllustrationContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AlternativeContainer = styled.TouchableOpacity`
  justify-content: center;
  padding: 10px;
  min-height: 70px;
  border-width: 1px;
  border-radius: 12px;
  border-color: black;
  margin-top: 10px;
`;

export const CarouselImage = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  /* border-radius: 80px; */
  margin: ${20}px 0px;
  align-self: center;
  width: 100%;
  height: 300px;
  /* width: ${({ width }): number | string => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({
    height,
  }): number | string => (typeof height === 'number' ? `${height}px` : height)}; */
`;
