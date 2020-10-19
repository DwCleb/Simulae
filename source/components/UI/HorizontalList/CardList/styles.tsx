import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 110px;
  background-color: white;
  shadow-color: #000;
  shadow-offset: 0px -8px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 2;
  border-radius: 12px;
  border-top-color: ${({ theme }): string => theme.primary.blue};
  border-top-width: 10px;
  padding: 20px;
  margin-top: 20px;
  margin-horizontal: 20px;
  margin-left: ${({ isFirstItemIndex }) => (isFirstItemIndex ? 20 : 20)}px;
  /* margin-bottom: 20px; */
`;

export const TitleContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }: ThemeContextType): string => theme.monochromatic.altGrey};
`;
