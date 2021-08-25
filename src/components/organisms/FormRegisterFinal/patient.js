import { Space } from '../../atoms/Space/space';
import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Title, Text } from '../../atoms/Typography/typography';
import { Tabs, TabPane } from '../../atoms/Tabs/tabs';
import { InputMask } from '../../atoms/Input/input';
import { Slider } from '../../atoms/Slider/slider';
import { Tooltip } from '../../atoms/Tooltip/tooltip';
import { Checkbox } from '../../atoms/Checkbox/checkbox';
import { Select, Option } from '../../atoms/Select/select';
import { Upload } from '../../molecules/Upload/upload';
import { TextIcon } from '../../molecules/TypographyIcon/textIcon';
import { Box } from '../../molecules/Box/box';

import { daysWeek } from '../../../utils/tuples';
import { useForm } from '../../../hooks/form';
import { Icons } from '../../../variables';

import { CheckboxGroup } from '../FormRegister/styles';
import {
  optionsEmotions,
  optionsBody,
  optionProfissional,
  optionEducation
} from '../FormRegister/utils';

export const FormPatientFinal = ({ onSubmitRegister, handleChangeChecks }) => {
  const [form] = useForm();

  const { Info } = Icons;
  return (
    <Box className='box__form'>
      <Form
        name='registerPatient'
        form={form}
        onFinish={onSubmitRegister}
      >
        <Space>
          <Title level={5}>Encontrar profissional</Title>
          <Text>Para encontrarmos o melhor profissional precisamos entender como vem se sentindo, desta forma você pode optar por preencher a nossa nuvem de palavras na aba abaixo, ou caso você já tenha um laudo médico, você poderá digitá-lo sem precisar preencher a nuvem.</Text>

          <Tabs defaultActiveKey='1'>
            <TabPane tab='Laudo médico / CDI' key='1'>
              <Space>
                <Title level={5}>Laudo médico</Title>
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
          <FormItem
            name='value'
          >
            <Slider marks={{ 80: 'R$ 80', 300: 'R$ 300' }} defaultValue={80} min={80} max={300} />
          </FormItem>

          <Title level={5}>Escolha o melhor dia e horário para sua sessão</Title>
        </Space>

        <Row gutter={[8]} >
          <Col span={12} xs={24} sm={12}>
            <FormItem
              label='Dia'
              name='day'
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
              label='Horário'
              name='hour'
            >
              <InputMask mask='11:11' />
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
    </Box>
  );
};
