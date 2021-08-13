import styled from 'styled-components';

import { Colors, Shadows } from '../../../../variables';

const { white, gray800 } = Colors;
const { shadowLight04 } = Shadows;

export const Button = styled.div`
  background-color: ${white};
  box-shadow: ${shadowLight04};
  padding: 1rem;
  border-radius: 15px;

  span{
    color:${gray800}
  }
`;
