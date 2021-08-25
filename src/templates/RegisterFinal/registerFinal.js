import { Space } from '../../components/atoms/Space/space';
import { Row, Col } from '../../components/atoms/Grid/grid';
import { Alert } from '../../components/atoms/Alert/alert';

export const RefisterFinal = ({ form, alert: { message, description } }) => (
  <Space>
    <Row justify='end'>
      <Col>
        <Alert message={message} description={description} showIcon />
      </Col>
    </Row>
    {form}
  </Space>
);

