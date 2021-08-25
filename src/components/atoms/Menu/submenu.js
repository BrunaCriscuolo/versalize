import { Menu } from 'antd';

const { SubMenu: S } = Menu;

export const SubMenu = ({ key, children, icon, title }) => (
  <S key={key} icon={icon} title={title}>
    {children}
  </S>
);
