import styled from 'styled-components';

import { Image as I } from 'antd';

import { Shadows } from '../../../../variables';

const { shadowLight12 } = Shadows;

export const Image = styled(I)`
  box-shadow: ${shadowLight12};

  &.i__circle{
    border-radius: 100%;
  }
`;
