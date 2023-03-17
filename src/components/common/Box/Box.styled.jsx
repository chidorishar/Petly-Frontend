import styled from 'styled-components';
import { system } from 'styled-system';

import {
  border,
  color,
  flexbox,
  space,
  layout,
  shadow,
  typography,
} from 'styled-system';

export const Box = styled('div')(
  border,
  color,
  flexbox,
  shadow,
  layout,
  space,
  typography,
  system({
    transition: {
      property: 'transition',
      scale: 'transitions',
      transform(value, scale) {
        const values = value.split(' ');
        const valueFromTheme = scale[values[1]];

        return valueFromTheme ? `${values[0]} ${valueFromTheme}` : '';
      },
    },
  })
);
