import styled from 'styled-components';

import { CheckboxGroup as C } from '../../../atoms/Checkbox/checkbox';


export const CheckboxGroup = styled(C)`
  &.ant-checkbox-group{
    label{
      &.ant-checkbox-group-item{
        width: 45%;
      }
    }
  }
`;
