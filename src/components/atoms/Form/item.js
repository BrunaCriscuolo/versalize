import { Form as F } from 'antd';

export const FormItem = ({ label, name, rules, children }) => (
  <F.Item
    label={label}
    name={name}
    rules={rules}
  >
    {children}
  </F.Item>
);
