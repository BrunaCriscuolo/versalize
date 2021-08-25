import styled from 'styled-components';

import { Card as C } from 'antd';

import { Shadows } from '../../../../variables';

const { shadowLight02 } = Shadows;

export const Card = styled(C)`
  &.ant-card{
    box-shadow: ${shadowLight02};
    margin-bottom: 2rem;

    img{
      box-shadow: none;
    }
  }

`;
