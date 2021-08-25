

import { notification } from 'antd';

export const useNotification = ({ type, message, description }) =>
  notification[type]({
    message,
    description,
  });
