import { Icon as I } from '../../atoms/Icon/icon';
import { Row, Col } from '../../atoms/Grid/grid';

import { Icons } from '../../../variables';

import { Button as B } from './styles';

export const ButtonCustom = ({ href, children }) => {
  const { ArrowRight } = Icons;
  return (
    <a href={href}>
      <B>
        <Row align='middle'>
          <Col span={22}>
            {children}
          </Col>
          <Col span={2}>
            <I as={ArrowRight} />
          </Col>
        </Row>
      </B>
    </a>
  );
};
