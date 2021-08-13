import styled from 'styled-components';

import { Layout as L } from 'antd';

import { Colors, Shadows } from '../../../../variables';

const { Header: H } = L;

const { gray100, gray800 } = Colors;
const { shadowLight12, shadowDark12 } = Shadows;

export const Header = styled(H)`
  background-color: ${gray800};
  color: ${gray100};
  box-shadow: ${shadowLight12};
  height: 70px;

  img{
    box-shadow: ${shadowDark12};
  }
  .ant-typography{
    color: ${gray100};
  }
  a{
    &.ant-btn-link{
      span{
        color: ${gray100};
      }
    }
  }
`;
