import { Row, Col } from '../../atoms/Grid/grid';
import { Button } from '../../atoms/Button/button';
import { Form, FormItem } from '../../atoms/Form/form';
import { Input, InputMask } from '../../atoms/Input/input';
import { DatePicker } from '../../atoms/DatePicker/datepicker';
import { Box } from '../../molecules/Box/box';

import { useForm } from '../../../hooks/form';
import { disabledBirthDay } from '../../../utils/date';


export const FormProfile = ({ onSubmitRegister }) => {
  const [form] = useForm();
  return (
    <Box className='box__form'>
      <Form
        name='registerPatient'
        form={form}
        onFinish={onSubmitRegister}
      >
        <FormItem
          label='Nome completo'
          name='fullName'
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
        >
          <Input placeholder='-----' />
        </FormItem>

        <FormItem
          label='Celular'
          name='phone'
        >
          <InputMask mask='(11)11111-1111' />
        </FormItem>

        <Row gutter={[8]}>
          <Col span={12} xs={24} sm={12}>
            <FormItem
              label='CPF'
              name='document'
            >
              <InputMask mask='111.111.111-11' />
            </FormItem>
          </Col>
          <Col span={12} xs={24} sm={12}>
            <FormItem
              label='Data de nascimento'
              name='birthday'
            >
              <DatePicker placeholder='-----' disabledDate={disabledBirthDay} />
            </FormItem>
          </Col>
        </Row>
        <Row justify='end'>
          <Col span={12} xs={24} sm={12}>
            <Button
              label='Salvar mudanças'
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
