import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  showsHorizonalScrollIndicator: false,
}))``;
