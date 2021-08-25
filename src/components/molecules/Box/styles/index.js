import styled from 'styled-components';

import { Colors, Shadows } from '../../../../variables';

const { white, gray200 } = Colors;
const { shadowLight04, shadowLightCard } = Shadows;

export const Box = styled.div`
  background-color: ${gray200};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${shadowLight04};
  width: 100%;
  min-height: 485px;
  margin-bottom: 2rem;

  .box__title{
    text-align: center;
  }
  &.box__form{
    background-color: ${white};
    box-shadow: ${shadowLightCard};
  }
`;
