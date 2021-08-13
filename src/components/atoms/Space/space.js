import { Space as S } from 'antd';

export const Space = ({ children, size = 'middle', direction = 'vertical' }) =>
  <S
    style={{ display: 'flex' }}
    size={size}
    direction={direction}
  >
    {children}
  </S>;
