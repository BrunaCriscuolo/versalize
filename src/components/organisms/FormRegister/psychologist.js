import { Space } from '../../atoms/Space/space';
import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Radio, RadioGroup } from '../../atoms/Radio/radio';
import { Title, Text } from '../../atoms/Typography/typography';
import { Input, InputMask, InputPassword } from '../../atoms/Input/input';
import { DatePicker } from '../../atoms/DatePicker/datepicker';
import { Slider } from '../../atoms/Slider/slider';
import { Checkbox } from '../../atoms/Checkbox/checkbox';
import { Select, Option } from '../../atoms/Select/select';
import { Card, Meta } from '../../atoms/Card/card';
import { Image } from '../../atoms/Image/image';
import { Icon } from '../../atoms/Icon/icon';

import { useForm } from '../../../hooks/form';

import { validator } from './validations';
import { Icons } from '../../../variables';

export const FormRegister = ({ onSubmitRegister }) => {
  const [form] = useForm();

  const {
    fullName,
    password,
    confirmPassword,
    phone,
    document,
    birthday,
    email
  } = validator;

  const { Checkout } = Icons;

  return (
    <Form
      name='registerPatient'
      form={form}
      onFinish={onSubmitRegister}
    >
      <FormItem
        label='Nome completo'
        name='fullName'
        rules={fullName}
      >
        <Input placeholder='-----' />
      </FormItem>
      <FormItem
        label='E-mail'
        name='email'
        rules={email}
      >
        <Input placeholder='-----' />
      </FormItem>
      <Row gutter={[8]}>
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Senha'
            name='password'
            rules={password}
          >
            <InputPassword placeholder='-----' />
          </FormItem>
        </Col>
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Confirmar senha'
            name='confirmPassword'
            rules={confirmPassword}
          >
            <InputPassword placeholder='-----' />
          </FormItem>
        </Col>
      </Row>
      <FormItem
        label='Celular'
        name='phone'
        rules={phone}
      >
        <Input placeholder='-----' />
      </FormItem>
      <Row gutter={[8]}>
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='CPF'
            name='document'
            rules={document}
          >
            <InputMask mask='111.111.111-11' />
          </FormItem>
        </Col>
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Data de nascimento'
            name='birthday'
            rules={birthday}
          >
            <DatePicker placeholder='-----' />
          </FormItem>
        </Col>
      </Row>
      <FormItem
        label='Gênero'
        name='gender'
      >
        <RadioGroup name='genderRadio' defaultValue='others'>
          <Row gutter={[16]}>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='masculine'>Masculino</Radio>
            </Col>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='feminine'>Feminino</Radio>
            </Col>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='nonBinary'>Não binário</Radio>
            </Col>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='others'>Prefiro não informar</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </FormItem>
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
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='graduation'>Graduação</Radio>
            </Col>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='postgraduate'>Pós graduação</Radio>
            </Col>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='master'>Mestrado</Radio>
            </Col>
            <Col span={6} xs={24} sm={12} lg={6}>
              <Radio value='doctorate'>Doutorado</Radio>
            </Col>
          </Row>
        </RadioGroup>
      </FormItem>
      <FormItem
        label='Nome do curso'
        name='course'
      >
        <Input placeholder='-----' />
      </FormItem>
      <FormItem
        label='Nome da instituição'
        name='institution'
      >
        <Input placeholder='-----' />
      </FormItem>
      <Title level={5}>Cursos adicionais</Title>
      <FormItem
        label='Nome do curso'
        name='course'
      >
        <Input placeholder='-----' />
      </FormItem>
      <FormItem
        label='Nome da instituição'
        name='institution'
      >
        <Input placeholder='-----' />
      </FormItem>
      <FormItem
        label='Idiomas'
        name='language'
      >
        <Select mode='multiple' placeholder='-----'>
          <Option key='ingles'>Inglês</Option>
          <Option key='espanhol'>Espanhol</Option>
        </Select>
      </FormItem>

      <Title level={5}>Valor por sessão</Title>

      <Space>
        <Slider marks={{ 0: 'R$ 80', 100: 'R$ 300' }} defaultValue={0} />
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

        <Row gutter={[16]} justify='center'>
          <Col xs={20} sm={12} lg={12} xl={10}>
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
          <Col xs={20} sm={12} lg={12} xl={10}>
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
  );
};
