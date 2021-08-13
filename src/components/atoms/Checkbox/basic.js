import { Checkbox as C } from 'antd';

export const Checkbox = ({ label, onChange }) => (
  <C onChange={onChange}>
    {label}
  </C>
);
