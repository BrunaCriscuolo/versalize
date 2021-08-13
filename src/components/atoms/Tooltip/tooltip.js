import { Tooltip as T } from 'antd';

export const Tooltip = ({ children, placement = 'top', title }) => (
  <T placement={placement} title={title}>
    {children}
  </T>
);
