import styled from 'styled-components';

import { Button as B } from 'antd';

import { Colors, Shadows } from '../../../../variables';

const { gray100, gray800 } = Colors;
const { shadowLight04 } = Shadows;

export const Button = styled(B)`
  &.ant-btn{
    border-radius: 7px;
    height: 45px;
    outline: none;
    border: none;
    box-shadow: ${shadowLight04};
    color: ${gray800};

    &:hover, &:focus{
      color: ${gray800};
      opacity: 0.8;
    }
  }

  &.ant-btn-link{
    box-shadow: none;
    span{
      color:${gray800};
      text-decoration: underline;
    }
  }
  &.ant-btn-primary{
    background-color:${gray800};
    color: ${gray100};

    span{
      color: ${gray100};
    }

    &:hover{
      color: ${gray100};
    }
  }
`;
