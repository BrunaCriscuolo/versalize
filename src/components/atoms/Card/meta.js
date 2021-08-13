import { Card } from 'antd';

const { Meta: M } = Card;

export const Meta = ({ avatar, title, description }) => (
  <M
    avatar={avatar}
    title={title}
    description={description}
  />
);
