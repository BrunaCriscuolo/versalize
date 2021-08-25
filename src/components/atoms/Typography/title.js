import { Title as T } from './styles';

export const Title = ({ children, type, level, disabled }) => (
  <T
    type={type}
    level={level}
    disabled={disabled}
  >
    {children}
  </T>
);
