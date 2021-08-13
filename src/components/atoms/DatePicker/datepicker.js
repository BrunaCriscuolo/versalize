import { DatePicker as D } from 'antd';

export const DatePicker = ({ onChange, placeholder, value, format = 'DD/MM/YYYY' }) => (
  <D
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    format={format}
  />
);
