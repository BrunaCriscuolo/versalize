import { Space } from '../../atoms/Space/space';
import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Radio, RadioGroup } from '../../atoms/Radio/radio';
import { Title, Text } from '../../atoms/Typography/typography';
import { Input } from '../../atoms/Input/input';
import { Slider } from '../../atoms/Slider/slider';
import { Checkbox } from '../../atoms/Checkbox/checkbox';
import { Select, Option } from '../../atoms/Select/select';
import { Card, Meta } from '../../atoms/Card/card';
import { Image } from '../../atoms/Image/image';
import { Icon } from '../../atoms/Icon/icon';
import { Box } from '../../molecules/Box/box';

import { useForm } from '../../../hooks/form';
import { specialty } from '../../../utils/tuples';

import { Icons } from '../../../variables';

export const FormPsychologistFinal = ({ onSubmitRegister }) => {
  const [form] = useForm();

  const { Checkout } = Icons;

  return (
    <Box className='box__form'>
      <Title level={5}>Cadastro de psicologo</Title>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, vitae illo accusamus, dolore delectus adipisci esse atque repellat totam officia alias corrupti quae consequuntur minus vel vero molestiae dolorem hic reprehenderit assumenda nulla perferendis. Provident distinctio alias quod maiores amet deserunt, mollitia incidunt unde soluta, rerum veniam excepturi omnis iusto?</Text>
      <Form
        name='registerPatient'
        form={form}
        onFinish={onSubmitRegister}
      >

        <FormItem
          label='Alinhamento CRP'
          name='crpCode'
        >
          <Input placeholder='-----' />
        </FormItem>
        <FormItem
          label='Especialidades'
          name='specialty'
        >
          <RadioGroup name='specialtyRadio' defaultValue='others'>
            <Row gutter={[16]}>
              {specialty.map(item => (
                <Col span={6} xs={24} sm={12} lg={6}>
                  <Radio value={item.value}>{item.label}</Radio>
                </Col>
              ))}
            </Row>
          </RadioGroup>
        </FormItem>

        <Row gutter={[16]}>
          <Col span={12}>
            <FormItem
              label='Nome do curso'
              name='course'
            >
              <Input placeholder='-----' />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label='Nome da instituição'
              name='institution'
            >
              <Input placeholder='-----' />
            </FormItem>
          </Col>
        </Row>


        <Title level={5}>Cursos adicionais</Title>
        <Row gutter={[16]}>
          <Col span={9}>
            <FormItem
              label='Nome do curso'
              name='course'
            >
              <Input placeholder='-----' />
            </FormItem>
          </Col>
          <Col span={9}>
            <FormItem
              label='Nome da instituição'
              name='institution'
            >
              <Input placeholder='-----' />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
              label='Idiomas'
              name='language'
            >
              <Select mode='multiple' placeholder='-----'>
                <Option key='ingles'>Inglês</Option>
                <Option key='espanhol'>Espanhol</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Title level={5}>Valor por sessão</Title>

        <Space size='large'>
          <FormItem
            name='value'
          >
            <Slider marks={{ 80: 'R$ 80', 300: 'R$ 300' }} defaultValue={80} min={80} max={300} />
          </FormItem>

          <Title level={5}>Deseja fazer triagem gratuita?</Title>
        </Space>

        <Space>
          <Row>
            <Col span={5}>
              <Checkbox label='Sim' />
            </Col>
            <Col span={5}>
              <Checkbox label='Não' />
            </Col>
          </Row>
          <Title level={5}>Deseja atender em um dos nossos espaços fisicos?</Title>
        </Space>

        <Space>
          <Row>
            <Col span={5}>
              <Checkbox label='Sim' />
            </Col>
            <Col span={5}>
              <Checkbox label='Não' />
            </Col>
          </Row>

          <Row gutter={[16]}>
            <Col xs={20} sm={12} lg={12} xl={5}>
              <Card
                cover={
                  <Image
                    alt='location'
                    src=''
                  />
                }
                actions={[
                  <Icon as={Checkout} />
                ]}
              >
                <Meta
                  title='Escritório mindfull'
                  description='Rua gabriel monteiro da silva. São paulo - SP'
                />
              </Card>
            </Col>
            <Col xs={20} sm={12} lg={12} xl={5}>
              <Card
                cover={
                  <Image
                    alt='location'
                    src=''
                  />
                }
                actions={[
                  <Icon as={Checkout} />
                ]}
              >
                <Meta
                  title='Escritório mindfull'
                  description='Rua gabriel monteiro da silva. São paulo - SP'
                />
              </Card>
            </Col>
            <Col xs={20} sm={12} lg={12} xl={5}>
              <Card
                cover={
                  <Image
                    alt='location'
                    src=''
                  />
                }
                actions={[
                  <Icon as={Checkout} />
                ]}
              >
                <Meta
                  title='Escritório mindfull'
                  description='Rua gabriel monteiro da silva. São paulo - SP'
                />
              </Card>
            </Col>
          </Row>


          <Row>
            <Col span={12} xs={24} sm={12}>
              <Text>Ao avançar, confirmo que aceito os<br />
                <strong>Termos de uso da plataforma</strong>
              </Text>
            </Col>
            <Col span={12} xs={24} sm={12}>
              <Button
                label='Cadastrar'
                block
                htmlType='submit'
                type='primary'
              />
            </Col>
          </Row>
        </Space>
      </Form >
    </Box>
  );
};
