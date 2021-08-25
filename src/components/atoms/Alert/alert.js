import { Alert as A } from 'antd';

export const Alert = ({ message, type, showIcon, description }) => (
  <A message={message} type={type} showIcon={showIcon} description={description} />
);
