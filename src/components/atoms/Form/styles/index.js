import styled from 'styled-components';

import { Form as F } from 'antd';

import { Colors } from '../../../../variables';

const { gray800 } = Colors;

export const Form = styled(F)`
  color:${gray800};

  .ant-form-item-label{
    padding-bottom: 0;

    label{
      color:${gray800};
    }
  }
  .ant-form-item-explain-error{
    font-size: 0.8rem;
  }

`;
