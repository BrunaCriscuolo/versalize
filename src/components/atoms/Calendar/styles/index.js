import styled from 'styled-components';

import { Calendar as C } from 'antd';

import { Colors } from '../../../../variables';

const { gray400 } = Colors;

export const Calendar = styled(C)`
  .ant-radio-button-wrapper{
    &:first-child{
      border-bottom-left-radius: 7px;
      border-top-left-radius: 7px;
    }
    &:last-child{
      border-bottom-right-radius: 7px;
      border-top-right-radius: 7px;
    }
  }
  .ant-select-selector{
    padding: 0 11px!important;
    box-shadow: none!important;
    border: 1px solid ${gray400}!important;
  }
`;
