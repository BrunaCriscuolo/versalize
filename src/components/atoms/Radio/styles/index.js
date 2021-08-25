import styled from 'styled-components';

import { Radio as R } from 'antd';

import { Colors, Shadows } from '../../../../variables';

const { white } = Colors;
const { shadowLight02 } = Shadows;

export const RadioGroup = styled(R.Group)`
  display: block;
  padding: 1rem 0.54rem;
  border-radius: 7px;

  background-color: ${white};
  border-radius: 7px;
  box-shadow: ${shadowLight02};
`;
