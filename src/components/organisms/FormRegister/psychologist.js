import { Space } from '../../atoms/Space/space';
import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Radio, RadioGroup } from '../../atoms/Radio/radio';
import { Title, Text } from '../../atoms/Typography/typography';
import { Input, InputMask } from '../../atoms/Input/input';
import { DatePicker } from '../../atoms/DatePicker/datepicker';
import { Slider } from '../../atoms/Slider/slider';
import { Checkbox } from '../../atoms/Checkbox/checkbox';
import { Select, Option } from '../../atoms/Select/select';
import { Card, Meta } from '../../atoms/Card/card';
import { Image } from '../../atoms/Image/image';
import { Icon } from '../../atoms/Icon/icon';

import { useForm } from '../../../hooks/form';
import { disabledBirthDay } from '../../../utils/date';
import { gender, specialty } from '../../../utils/tuples';

import { validator } from './validations';
import { Icons } from '../../../variables';

export const FormRegister = ({ onSubmitRegister }) => {
  const [form] = useForm();

  const {
    fullName,
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
        label='Nome social'
        name='socialName'
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

      <FormItem
        label='Celular'
        name='phone'
        rules={phone}
      >
        <InputMask mask='(11)11111-1111' />
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
            <DatePicker placeholder='-----' disabledDate={disabledBirthDay} />
          </FormItem>
        </Col>
      </Row>

      <FormItem
        label='Gênero'
        name='gender'
      >
        <RadioGroup name='radiogroup' defaultValue='NaoInformado'>
          <Row gutter={[16]}>
            {gender.map(item => (
              <Col span={6} xs={24} sm={12} lg={item.value === 'NaoInformado' ? 12 : 6}>
                <Radio value={item.value}>{item.label}</Radio>
              </Col>
            ))}
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
            {specialty.map(item => (
              <Col span={6} xs={24} sm={12} lg={6}>
                <Radio value={item.value}>{item.label}</Radio>
              </Col>
            ))}
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
