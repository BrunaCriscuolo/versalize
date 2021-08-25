import { Breadcrumb } from 'antd';

export const BreadcrumbItem = ({ children, href }) => (
  <Breadcrumb.Item href={href}>
    {children}
  </Breadcrumb.Item>
);
