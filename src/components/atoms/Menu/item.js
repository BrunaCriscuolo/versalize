import { Menu as M } from 'antd';

export const MenuItem = ({ key, children }) => (
  <M.Item key={key}>
    {children}
  </M.Item>
);
