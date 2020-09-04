import styled from 'styled-components/native';
import { ThemeContextType } from '~/theme';

/* FIXME: It should extend Text Type */
export interface TypographyProps {
  /**
   * Typography type: H1, H2, H3, H4, H5, H6, P1, P2, L1, L2
   */
  type?: TypographyType;
  color?: string;
  weight?: string;
  size?: number;
  lineHeight?: number;
  letterSpacing?: number;
  align?: boolean | string;
  distance?: number[];
  uppercase?: boolean;
  bold?: boolean | number;
  children?: React.ReactNode;
  numberOfLines?: number;
}

// FIXME: this is a workaround, we should use StyleComponents types
type ThemedTypographyProps = TypographyProps & ThemeContextType;

export enum TypographyType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  P1 = 'P1',
  P2 = 'P2',
  L1 = 'L1',
  L2 = 'L2',
}

export interface TypographySpecification {
  weight: string;
  size: number;
  lineHeight: number;
}

function getTypographySpecification(type: string): TypographySpecification {
  switch (type) {
    case TypographyType.H1:
      return { weight: 'Light', size: 40, lineHeight: 40 };
    case TypographyType.H2:
      return { weight: 'Light', size: 32, lineHeight: 32 };
    case TypographyType.H3:
      return { weight: 'Medium', size: 24, lineHeight: 36 };
    case TypographyType.H4:
      return { weight: 'Light', size: 20, lineHeight: 30 };
    case TypographyType.H5:
      return { weight: 'Regular', size: 18, lineHeight: 27 };
    case TypographyType.H6:
      return { weight: 'Regular', size: 16, lineHeight: 24 };
    case TypographyType.P1:
      return { weight: 'Regular', size: 16, lineHeight: 20 };
    case TypographyType.P2:
      return { weight: 'Light', size: 14, lineHeight: 21 };
    case TypographyType.L1:
      return { weight: 'Medium', size: 12, lineHeight: 24 };
    case TypographyType.L2:
      return { weight: 'Regular', size: 10, lineHeight: 18 };
    default:
      return { weight: 'Regular', size: 16, lineHeight: 24 };
  }
}

function getAlignment(prop?: string | boolean): string {
  if (typeof prop === 'string') {
    return prop;
  }

  return prop ? 'center' : 'left';
}

function getPadding(prop: number[] = []): string {
  switch (prop.length || 0) {
    case 1:
      return `${prop[0]}px`;
    case 2:
      return `${prop[0]}px ${prop[1]}px`;
    case 3:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px`;
    case 4:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px ${prop[3]}px`;
    default:
      return '0px';
  }
}

function getColor(props: ThemedTypographyProps): string {
  return props.color ? props.color : props.theme.monochromatic.black;
}

function getSize(props: TypographyProps): number {
  return props.size !== undefined
    ? props.size
    : props.type !== undefined
    ? getTypographySpecification(props.type).size
    : getTypographySpecification(TypographyType.P1).size;
}

function getWeight(props: TypographyProps): string {
  if (props.bold) return 'Bold';

  if (props.weight) return props.weight;

  return props.type !== undefined
    ? getTypographySpecification(props.type).weight
    : getTypographySpecification(TypographyType.P1).weight;
}

function getLineHeight(props: TypographyProps): number {
  return props.lineHeight !== undefined
    ? props.lineHeight
    : props.type !== undefined
    ? getTypographySpecification(props.type).lineHeight
    : getTypographySpecification(TypographyType.P1).lineHeight;
}

function getLetterSpacing(props: TypographyProps): number {
  return props.letterSpacing !== undefined ? props.letterSpacing : 0;
}

const Typography: React.FC<TypographyProps> = styled.Text`
  color: ${(props: ThemedTypographyProps): string => getColor(props)};
  font-size: ${(props: TypographyProps): number => getSize(props)}px;
  /* font-family: ${(props: TypographyProps): string => `NAME-${getWeight(props)}`}; */
  text-align: ${(props: TypographyProps): string => getAlignment(props.align)};
  padding: ${(props: TypographyProps): string => getPadding(props.distance)};
  line-height: ${(props: TypographyProps): number => getLineHeight(props)};
  letter-spacing: ${(props: TypographyProps): number => getLetterSpacing(props)};
  text-transform: ${({ uppercase }: TypographyProps): string => (uppercase ? 'uppercase' : 'none')};
`;

Typography.defaultProps = {
  align: true,
};

export default Typography;
