import { Input, InputPassword } from '../../atoms/Input/input';
import { Button } from '../../atoms/Button/button';
import { Row, Col } from '../../atoms/Grid/grid';
import { Form, FormItem } from '../../atoms/Form/form';
import { Space } from '../../atoms/Space/space';
import { Box } from '../../molecules/Box/box';

import { Icons } from '../../../variables';

import { validator } from './validations';

const { Google } = Icons;
const { email, password } = validator;

export const BoxLogin = ({ onSubmitLogin, loading, form }) => (
  <Box title='Já tenho conta'>
    <Form
      name='login'
      form={form}
      onFinish={onSubmitLogin}
    >
      <FormItem
        label='E-mail'
        name='email'
        rules={email}
      >
        <Input placeholder='Entre com o seu email' />
      </FormItem>
      <FormItem
        label='Senha'
        name='password'
        rules={password}
      >
        <InputPassword placeholder='Entre com a sua senha' />
      </FormItem>

      <Row justify='end'>
        <Col>
          <Button type='link' label='Esqueci minha senha' block />
        </Col>
      </Row>

      <Space direction='vertical' size='middle'>
        <Button
          label='Acessar minha conta'
          htmlType='submit'
          type='primary'
          loading={loading}
          block
        />
        <Button
          label='Continuar com Google'
          icon={<Google />}
          block
        />
      </Space>
    </Form>
  </Box>
);
