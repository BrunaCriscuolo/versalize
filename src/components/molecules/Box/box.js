import { Title, Text } from '../../atoms/Typography/typography';
import { Space } from '../../atoms/Space/space';
import { Box as B } from './styles';

export const Box = ({ title, description, children, className }) => (
  <B className={className}>
    <Space size='large'>
      {title && (
        <div className='box__title'>
          {title && <Title level={3}>{title}</Title>}
          {description && <Text>{description}</Text>}
        </div>
      )}
      {children}
    </Space>

  </B>
);

