import styled from 'styled-components';
import { Select as S } from 'antd';

export const Select = styled(S)`
  &.ant-select:not(.ant-select-customize-input)
  .ant-select-selector{
    padding: 0.4rem;
    display: block;
    height: 42px;
  }
`;
