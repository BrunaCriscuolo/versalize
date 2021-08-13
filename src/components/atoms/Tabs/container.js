import { Tabs as T } from './styles';

export const Tabs = ({ defaultActiveKey, onChange, children, className }) => (
  <T defaultActiveKey={defaultActiveKey} onChange={onChange} className={className}>
    {children}
  </T>
);
