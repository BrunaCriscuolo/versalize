import styled from 'styled-components';
import { Layout as L } from 'antd';

import { Colors } from '../../../../variables';

const { gray100 } = Colors;

export const Layout = styled(L)`
  &.ant-layout{
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${gray100};
  }
`;
