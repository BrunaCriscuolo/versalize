import { Sider as S } from './styles';

export const Sider = ({ trigger, children, collapsible, collapsed, className }) => (
  <S trigger={trigger} collapsible={collapsible} collapsed={collapsed} className={className}> {children}</S>
);
