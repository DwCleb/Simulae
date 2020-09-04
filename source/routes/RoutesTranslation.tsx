import React from 'react';
import { Typography } from '~/components';
import { useTranslation } from 'react-i18next';
import { TypographyType } from '~/components/UI/Typography';

interface Props {
  name: string;
  color?: string;
}

export default function Translate({ name, color }: Props): JSX.Element {
  const { t } = useTranslation();
  return (
    <Typography type={TypographyType.L2} bold uppercase distance={[-20]} size={10} color={color}>
      {t(`common.navigation.${name}`)}
    </Typography>
  );
}
