import { Space } from '../../atoms/Space/space';
import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Radio, RadioGroup } from '../../atoms/Radio/radio';
import { Title, Text } from '../../atoms/Typography/typography';
import { Tabs, TabPane } from '../../atoms/Tabs/tabs';
import { Input, InputMask } from '../../atoms/Input/input';
import { Slider } from '../../atoms/Slider/slider';
import { DatePicker } from '../../atoms/DatePicker/datepicker';
import { Tooltip } from '../../atoms/Tooltip/tooltip';
import { Checkbox } from '../../atoms/Checkbox/checkbox';
import { Select, Option } from '../../atoms/Select/select';
import { ButtonUpload } from '../../molecules/Upload/upload';
import { TextIcon } from '../../molecules/TypographyIcon/textIcon';

import { useForm } from '../../../hooks/form';
import { Icons } from '../../../variables';
import { gender, daysWeek } from '../../../utils/tuples';
import { disabledBirthDay } from '../../../utils/date';

import { validator } from './validations';
import { CheckboxGroup } from './styles';

import {
  optionsEmotions,
  optionsBody,
  optionProfissional,
  optionEducation
} from './utils';


export const FormPatient = ({ onSubmitRegister, handleChangeChecks, loading }) => {
  const [form] = useForm();

  const { Info } = Icons;
  const {
    fullName,
    phone,
    document,
    birthday,
    email,
    day,
    hour
  } = validator;

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
        label='G??nero'
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

      <Space>
        <Title level={5}>Encontrar profissional</Title>
        <Text>Para encontrarmos o melhor profissional precisamos entender como vem se sentindo, desta forma voc?? pode optar por preencher a nossa nuvem de palavras na aba abaixo, ou caso voc?? j?? tenha um laudo m??dico, voc?? poder?? digit??-lo sem precisar preencher a nuvem.</Text>

        <Tabs defaultActiveKey='1'>
          <TabPane tab='Laudo m??dico / CDI' key='1'>
            <Space>
              <Title level={5}>Laudo m??dico</Title>
              <Row>
                <Col span={12} xs={24} sm={12}>
                  <FormItem
                    name='medicalReport'
                  >
                    <Checkbox label='Ja possui diagnostico?' />
                  </FormItem>

                </Col>
                <Col span={12} xs={24} sm={12}>
                  <Tooltip title='Lorem ipsum dolor sit amet.'>
                    <TextIcon icon={Info} label='Como encontrar o CID no meu documento?' />
                  </Tooltip>
                </Col>
              </Row>
              <ButtonUpload label='Enviar arquivo do laudo m??dico' />
            </Space>
          </TabPane>

          <TabPane tab='Nuvem de palavras' key='2'>
            <Tabs defaultActiveKey='1' className='tab__internal'>
              <TabPane tab='Emo????es' key='1'>
                <CheckboxGroup
                  options={optionsEmotions}
                  onChange={handleChangeChecks}
                />
              </TabPane>
              <TabPane tab='Corpo F??sico' key='2'>
                <CheckboxGroup
                  options={optionsBody}
                  onChange={handleChangeChecks}
                />
              </TabPane>
              <TabPane tab='Profissional' key='3'>
                <CheckboxGroup
                  options={optionProfissional}
                  onChange={handleChangeChecks}
                />
              </TabPane>
              <TabPane tab='Educacional' key='4'>
                <CheckboxGroup
                  options={optionEducation}
                  onChange={handleChangeChecks}
                />
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </Space>


      <Title level={5}>Qual o valor ideal da sua sess??o?</Title>

      <Space size='large'>
        <FormItem
          name='value'
        >
          <Slider marks={{ 80: 'R$ 80', 300: 'R$ 300' }} defaultValue={80} min={80} max={300} />
        </FormItem>

        <Title level={5}>Escolha o melhor dia e hor??rio para sua sess??o</Title>
      </Space>

      <Row gutter={[8]} >
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Dia'
            name='day'
            rules={day}
          >
            <Select placeholder='-----'>
              {daysWeek.map(item => (
                <Option key={item.value}>{item.label}</Option>
              ))}

            </Select>
          </FormItem>
        </Col>
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Hor??rio'
            name='hour'
            rules={hour}
          >
            <InputMask mask='11:11' />
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span={12} xs={24} sm={12}>
          <Text>Ao avan??ar, confirmo que aceito os<br />
            <strong>Termos de uso da plataforma</strong>
          </Text>
        </Col>
        <Col span={12} xs={24} sm={12}>
          <Button
            label='Cadastrar'
            block
            htmlType='submit'
            type='primary'
            loading={loading}
          />
        </Col>
      </Row>
    </Form >
  );
};
