
import { Text } from '../../atoms/Typography/typography';
import { Row, Col } from '../../atoms/Grid/grid';
import { Footer as F } from '../../atoms/Footer/footer';

export const Footer = () => (
  <F>
    <Row justify='center' className='txt-align__center'>
      <Col xs={24} sm={10} lg={10} xl={7} xxl={5}>
        <Text>Versalize© - Todos direitos reservados</Text>
      </Col>
      <Col xs={24} sm={2} lg={2} xl={1} xxl={1}>
        <Text>|</Text>
      </Col>
      <Col xs={23} sm={10} lg={10} xl={7} xxl={5}>
        <Text>Termos de uso e políticas de privacidade</Text>
      </Col>
    </Row>
  </F>
);
