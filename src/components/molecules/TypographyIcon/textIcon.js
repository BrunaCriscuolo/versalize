import { Text } from '../../atoms/Typography/typography';
import { Space } from '../../atoms/Space/space';
import { Icon } from '../../atoms/Icon/icon';

export const TextIcon = ({ label, icon }) => (
  <Space direction='horizontal' size='small'>
    <Icon as={icon} />
    <Text>
      {label}
    </Text>
  </Space>
);

