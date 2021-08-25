import { Input as I } from 'antd';

export const Input = ({ value, onChange, placeholder }) => (
  <I
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
