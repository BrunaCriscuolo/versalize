
import { Title } from '../../atoms/Typography/typography';
import { Image } from '../../atoms/Image/image';
import { Row, Col } from '../../atoms/Grid/grid';

import { Container as C } from './styles/styles';

export const Top = ({ title, subtitle, image: { src, alt, width, height } }) => (
  <C>
    <Row justify='center' className='txt-align__center'>
      <Col>
        <Image src={src} alt={alt} width={width} height={height} className='i__circle' />
        <Title level={1}>{title}</Title>
        <Title level={5}>{subtitle}</Title>
      </Col>
    </Row>
  </C>
);
