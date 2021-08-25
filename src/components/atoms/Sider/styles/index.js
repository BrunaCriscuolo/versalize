import styled from 'styled-components';
import { Layout } from 'antd';

import { Colors, Shadows } from '../../../../variables';

const { Sider: S } = Layout;

const { white } = Colors;
const { shadowLight04 } = Shadows;

export const Sider = styled(S)`
  &.ant-layout-sider{
    background-color: ${white};
    box-shadow: ${shadowLight04};
    height: 100vh;
    position: fixed;
    z-index: 3;
  }
`;
