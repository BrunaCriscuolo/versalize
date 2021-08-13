import { Radio as R } from 'antd';

export const Radio = ({ value, children }) => (
  <R value={value}>
    {children}
  </R>
);
