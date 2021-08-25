import { Row, Col } from '../../components/atoms/Grid/grid';
import { BoxPhoto } from '../../components/organisms/BoxPhoto/boxPhoto';

export const Profile = ({ form }) => (
  <Row gutter={[32]}>
    <Col span={8}>
      <BoxPhoto />
    </Col>
    <Col span={16}>
      {form}
    </Col>
  </Row>
);
