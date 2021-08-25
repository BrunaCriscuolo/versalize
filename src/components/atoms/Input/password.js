import { Input as I } from './styles';

export const InputPassword = ({ value, onChange, placeholder }) => (
  <I
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
