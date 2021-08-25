import styled from 'styled-components';

import { Steps as S } from 'antd';

import { Colors, Shadows } from '../../../../variables';

const { gray100, gray800, successMain, successDark } = Colors;
const { shadowLight04 } = Shadows;

export const Steps = styled(S)`
  .ant-steps-item{
    padding: 1rem 0;
  }
  .ant-steps-item-process >
  .ant-steps-item-container >
  .ant-steps-item-icon,
  .ant-steps-item-finish
  .ant-steps-item-icon{
    box-shadow: ${shadowLight04};
    color: ${gray100};
    background-color: ${gray800};
    border-color: ${gray800};
    svg{
      color: ${successMain};
    }
  }
  .ant-steps-item-finish >
  .ant-steps-item-container >
  .ant-steps-item-content >
  .ant-steps-item-title{
    &:after{
      background-color: ${successDark};
    }
  }
`;
