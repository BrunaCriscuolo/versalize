import styled from 'styled-components';
import { Input as I } from 'antd';

import { Shadows } from '../../../../variables';

const { Search } = I;

const { shadowLight04 } = Shadows;

export const Input = styled(I.Password)`
  &.ant-input-password{
    input{
      &.ant-input{
        box-shadow: none;
      }
    }
  }
`;

export const InputSearch = styled(Search)`
  .ant-btn.ant-btn-icon-only.ant-input-search-button{
    height: 43px;
    border: none;
    box-shadow: ${shadowLight04};
    border-bottom-right-radius: 7px;
    border-top-right-radius: 7px;
  }
`;
