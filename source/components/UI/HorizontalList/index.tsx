import React from 'react';
import { FlatList } from 'react-native';

import { Typography } from '~/components';
import { TypographyType } from '~/components/UI/Typography';

export default function HorizontalList({ ListItem, headerTitle, data }): JSX.Element {
  return (
    <React.Fragment>
      <Typography type={TypographyType.H3} distance={[0, 0, 0, 20]} align="justify">
        {headerTitle}
      </Typography>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }): JSX.Element => {
          console.log(index);
          const firstItemIndex = index === 0;
          return <ListItem item={{ ...item }} isFirstItemIndex={firstItemIndex} onPress={(): void => {}} />;
        }}
        keyExtractor={(item): string => item.id}
      />
    </React.Fragment>
  );
}
