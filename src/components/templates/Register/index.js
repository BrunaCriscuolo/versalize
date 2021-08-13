
import { Space } from '../../atoms/Space/space';
import { Layout } from '../../atoms/Layout/layout';
import { Header } from '../../atoms/Header/header';
import { Content } from '../../atoms/Content/content';
import { Row, Col } from '../../atoms/Grid/grid';
import { Text, Title } from '../../atoms/Typography/typography';
import { Footer } from '../../molecules/Footer/footer';
import { Button } from '../../atoms/Button/button';
import { Image } from '../../atoms/Image/image';
import { TextIcon } from '../../molecules/TypographyIcon/textIcon';

import { Icons } from '../../../variables';

export const LayoutRegister = ({ form, title, subtitle }) => {
  const { Question, ArrowLeft } = Icons;

  return (
    <Layout>
      <Header>
        <Row>
          <Col xs={6} sm={8} lg={16} xl={18} xxl={18}>
            <Image src='' alt='Logo Aqui' width={50} height={50} className='i__circle' />
          </Col>
          <Col xs={10} sm={8} lg={4} xl={3} xxl={3} className='txt-align__end'>
            <TextIcon icon={Question} label='Precisa de ajuda?' />
          </Col>
          <Col xs={4} sm={8} lg={4} xl={3} xxl={3} className='txt-align__end'>
            <Button
              label='Voltar para o login'
              icon={<ArrowLeft />}
              type='link'
              href='/login' />
          </Col>
        </Row>
      </Header>
      <Row justify='center'>
        <Col xs={24} sm={24} lg={14} xl={12} xxl={10}>
          <Content>
            <Space size={50}>
              <Row className='txt-align__center'>
                <Col span={24}>
                  <Title level={1}>{title}</Title>
                  <Text>{subtitle}</Text>
                </Col>
              </Row>
              {form}
            </Space>
          </Content>
        </Col>
      </Row>
      <Footer />
    </Layout>
  );
};
