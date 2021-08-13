import { Input as I } from 'antd';

export const InputPassword = ({ value, onChange, placeholder }) => (
  <I.Password
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
