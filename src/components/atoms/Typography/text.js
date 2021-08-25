import { Text as T } from './styles';

export const Text = ({ children, type, disabled, ...rest }) => (
  <T type={type} disabled={disabled} {...rest}>
    {children}
  </T>
);
