import styled from 'styled-components';
import { Typography } from 'antd';

const { Text: Txt, Title: Ttl } = Typography;

export const Text = styled(Txt)`
  margin: 0px;
  line-height: 1.57143;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Title = styled(Ttl)`
  margin: 0px 0px 8px;
  font-weight: 700;

  h1 {
    line-height: 1.25;
    font-size: 2.5rem;
  }
  h2 {
    line-height: 1.33333;
    font-size: 2rem;
  }
  h3 {
    line-height: 1.5;
    font-size: 1.5rem;
  }
  h4 {
    line-height: 1.5;
    font-size: 1.25rem;
  }
  h5 {
    line-height: 1.5;
    font-size: 1.125rem;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 3.25rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.625rem;
    }
    h5 {
      font-size: 1.1875rem;
    }
  }
  @media (min-width: 960px) {
    h1 {
      font-size: 3.625rem;
    }
    h2 {
      font-size: 2.75rem;
    }
    h3 {
      font-size: 1.875rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 1280px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;
