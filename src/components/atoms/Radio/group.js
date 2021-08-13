import { RadioGroup as R } from './styles';

export const RadioGroup = ({ onChange, value, children, name, defaultValue }) => (
  <R
    onChange={onChange}
    value={value}
    name={name}
    defaultValue={defaultValue}
  >
    {children}
  </R>
);
