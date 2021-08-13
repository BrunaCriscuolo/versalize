import { createGlobalStyle } from 'styled-components';
import { Colors, Shadows } from '../variables';

const { gray500, infoMain } = Colors;
const { shadowLight04 } = Shadows;

export const InputStyles = createGlobalStyle`
  .ant-input,
  .ant-picker,
  .ant-input-password,
  .ant-select:not(.ant-select-customize-input)
  .ant-select-selector{
    padding: 0.6rem;
    border-radius: 7px;
    box-shadow: ${shadowLight04};
    border: 1px solid transparent;

    &:focus{
      border: 1px solid ${infoMain};
      box-shadow: ${shadowLight04};
    }
    &::placeholder {
      color: ${gray500};
      opacity: 1;
    }
  }
  .ant-picker{
    display: block;
  }
  .ant-input-password{
    input{
      &.ant-input{
        box-shadow: none;
      }
    }
  }
  .ant-select-selector{
    padding: 0.4rem!important;
    display: block;
  }
`;
