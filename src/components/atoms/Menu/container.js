import { Menu as M } from 'antd';

export const Menu = ({ mode = 'horizontal', defaultSelectedKeys, children }) => (
  <M theme='light' mode={mode} defaultSelectedKeys={defaultSelectedKeys}>
    {children}
  </M>
);
