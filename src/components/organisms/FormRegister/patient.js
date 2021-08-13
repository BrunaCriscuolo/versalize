import { Space } from '../../atoms/Space/space';
import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Radio, RadioGroup } from '../../atoms/Radio/radio';
import { Title, Text } from '../../atoms/Typography/typography';
import { Tabs, TabPane } from '../../atoms/Tabs/tabs';
import { Input, InputMask, InputPassword } from '../../atoms/Input/input';
import { Slider } from '../../atoms/Slider/slider';
import { DatePicker } from '../../atoms/DatePicker/datepicker';
import { TimePicker } from '../../atoms/TimePicker/timePicker';
import { Tooltip } from '../../atoms/Tooltip/tooltip';
import { Checkbox } from '../../atoms/Checkbox/checkbox';
import { Upload } from '../../molecules/Upload/upload';
import { TextIcon } from '../../molecules/TypographyIcon/textIcon';

import { useForm } from '../../../hooks/form';
import { Icons } from '../../../variables';

import { validator } from './validations';
import { CheckboxGroup } from './styles';

import {
  optionsEmotions,
  optionsBody,
  optionProfissional,
  optionEducation
} from './utils';

export const FormPatient = ({ onSubmitRegister, handleChangeChecks }) => {
  const [form] = useForm();

  const { Info } = Icons;
  const {
    fullName,
    password,
    confirmPassword,
    phone,
    document,
    birthday
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
        <RadioGroup name='radiogroup' defaultValue='others'>
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

      <Space>
        <Title level={5}>Encontrar profissional</Title>
        <Text>Para encontrarmos o melhor profissional precisamos entender como vem se sentindo, desta forma você pode optar por preencher a nossa nuvem de palavras na aba abaixo, ou caso você já tenha um laudo médico, você poderá digitá-lo sem precisar preencher a nuvem.</Text>

        <Tabs defaultActiveKey='1'>
          <TabPane tab='Laudo médico / CDI' key='1'>
            <Space>
              <Title level={5}>Laudo médico</Title>
              <Row>
                <Col span={12} xs={24} sm={12}>
                  <Checkbox label='Ja possui diagnostico?' />
                </Col>
                <Col span={12} xs={24} sm={12}>
                  <Tooltip title='Lorem ipsum dolor sit amet.'>
                    <TextIcon icon={Info} label='Como encontrar o CID no meu documento?' />
                  </Tooltip>
                </Col>
              </Row>
              <Upload label='Enviar arquivo do laudo médico' />
            </Space>
          </TabPane>

          <TabPane tab='Nuvem de palavras' key='2'>
            <Tabs defaultActiveKey='1' className='tab__internal'>
              <TabPane tab='Emoções' key='1'>
                <CheckboxGroup
                  options={optionsEmotions}
                  onChange={handleChangeChecks}
                />
              </TabPane>
              <TabPane tab='Corpo Físico' key='2'>
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


      <Title level={5}>Qual o valor ideal da sua sessão?</Title>

      <Space size='large'>
        <Slider marks={{ 0: 'R$ 80', 100: 'R$ 300' }} defaultValue={0} />
        <Title level={5}>Escolha o melhor dia e horário para sua sessão</Title>
      </Space>

      <Row gutter={[8]} >
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Dia'
            name='day'
          >
            <DatePicker />
          </FormItem>
        </Col>
        <Col span={12} xs={24} sm={12}>
          <FormItem
            label='Horário'
            name='hour'
          >
            <TimePicker />
          </FormItem>
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
    </Form >
  );
};
