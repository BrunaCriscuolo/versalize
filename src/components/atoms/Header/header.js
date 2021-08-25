import { Header as H } from './styles';

export const Header = ({ children, className }) => (
  <H className={className}>
    {children}
  </H>
);
