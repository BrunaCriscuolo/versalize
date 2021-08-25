import { Layout as L } from './styles';

export const Layout = ({ className, children }) => (
  <L className={className}> {children}</L>
);
