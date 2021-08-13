import { Steps as S } from './styles';

export const Steps = ({ current, children, className }) => (
  <S current={current} className={className}>
    {children}
  </S>
);
