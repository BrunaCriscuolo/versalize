import { Menu as M } from './styles';

export const Menu = ({ mode = 'horizontal', defaultSelectedKeys, children, className, onClick }) => (
  <M theme='light' mode={mode} defaultSelectedKeys={defaultSelectedKeys} className={className} onClick={onClick}>
    {children}
  </M>
);
