import styled from 'styled-components';

import { Slider as S } from 'antd';

import { Colors } from '../../../../variables';

const { gray300, gray700 } = Colors;

export const Slider = styled(S)`
  .ant-slider-rail{
    background-color: ${gray300};
  }
  .ant-slider-track,
  .ant-slider:hover{
    background-color: ${gray700}!important;
  }
  .ant-slider-dot-active, .ant-slider-handle{
    border-color: ${gray700};
  }
  .ant-slider-dot{
    border-color: ${gray300};
  }
`;
