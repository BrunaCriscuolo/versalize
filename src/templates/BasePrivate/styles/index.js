import styled from 'styled-components';

import { Header as H } from '../../../components/atoms/Header/header';
import { Sider as S } from '../../../components/atoms/Sider/sider';
import { Layout as L } from '../../../components/atoms/Layout/layout';

import { Colors, Shadows } from '../../../variables';

const { white, gray800 } = Colors;
const { shadowLight04 } = Shadows;

export const Header = styled(H)`
  &.ant-layout-header{
    background-color: ${white}!important;
    color: ${gray800};
    box-shadow: ${shadowLight04};

    .ant-typography{
      color: ${gray800};
    }

    @media (min-width: 576px) {
      padding: 0 3rem;
    }
  }
`;

export const Sider = styled(S)`
  &.ant-layout-sider{
    padding: 1rem 0;
    text-align: center;
  }
`;

export const LayoutResponsive = styled(L)`
  margin-left: 200px;

  &.menu__collapsed{
    margin-left: 80px;
  }
`;
