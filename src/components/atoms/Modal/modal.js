import { Modal as M } from 'antd';

export const Modal = ({ visible, title, footer, onCancel, children }) => (
  <M
    visible={visible}
    title={title}
    footer={footer}
    onCancel={onCancel}>
    {children}
  </M>
);
