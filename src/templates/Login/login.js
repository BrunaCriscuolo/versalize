import { Row, Col } from '../../components/atoms/Grid/grid';
import { BoxLogin } from '../../components/organisms/Box/login';
import { BoxRegister } from '../../components/organisms/Box/register';
import { Top } from '../../components/molecules/Top/top';
import { Footer } from '../../components/molecules/Footer/footer';
import { Layout } from '../../components/atoms/Layout/layout';
import { Content } from '../../components/atoms/Content/content';

export const Login = ({
  onSubmitLogin,
  loading,
  form
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
              loading={loading}
              form={form}
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
