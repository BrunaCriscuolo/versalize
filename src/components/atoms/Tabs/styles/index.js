import styled from 'styled-components';

import { Tabs as T } from 'antd';

import { Colors, Shadows } from '../../../../variables';

const { white, gray200 } = Colors;
const { shadowLight02, shadowLight04 } = Shadows;

export const Tabs = styled(T)`
  &.ant-tabs{
    margin-bottom: 2em;
    background-color: ${white};
    border-radius: 15px;
    padding: 0 1rem 1rem;
    box-shadow: ${shadowLight04};
  }

  &.tab__internal{
    box-shadow: ${shadowLight02};
    background-color: ${gray200};
    margin: 0;
  }
`;
