import { Row, Col } from '../../atoms/Grid/grid';
import { BoxLogin } from '../../organisms/Box/login';
import { BoxRegister } from '../../organisms/Box/register';
import { Top } from '../../molecules/Top/top';
import { Footer } from '../../molecules/Footer/footer';
import { Layout } from '../../atoms/Layout/layout';
import { Content } from '../../atoms/Content/content';

export const Login = ({
  onSubmitLogin,
}) => {
  const image = {
    src: './teste',
    alt: 'Logo da Versalize',
    width: 80,
    height: 80
  };

  return (
    <Layout className='layout'>
      <Row justify='center'>
        <Col span={24}>
          <Top
            title='Bem-vindo a Versalize!'
            subtitle='Acesse ou crie uma nova conta'
            image={image}
          />
        </Col>
      </Row>

      <Content>
        <Row justify='center' gutter={{ xs: 2, sm: 8, md: 24, lg: 32 }}>
          <Col span={6} xs={22} sm={15} lg={9} xl={8} xxl={6} >
            <BoxLogin
              onSubmitLogin={onSubmitLogin}
            />
          </Col>
          <Col span={6} xs={22} sm={15} lg={9} xl={8} xxl={6} >
            <BoxRegister />
          </Col>
        </Row>
      </Content>

      <Row justify='center'>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </Layout>
  );
};
