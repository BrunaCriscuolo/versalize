import { Space } from '../../atoms/Space/space';
import { Title, Text } from '../../atoms/Typography/typography';
import { Box } from '../../molecules/Box/box';
import { ButtonCustom } from '../../molecules/ButtonCustom/buttonCustom';

export const BoxRegister = () => (
  <Box title='Criar uma nova conta' description='Sua conta Versalize será criada gratuitamente'>
    <Space>
      <ButtonCustom href='/cadastro/paciente'>
        <Title level={5}>Sou Paciente</Title>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, neque?</Text>
      </ButtonCustom>
      <ButtonCustom href='/cadastro/psicologo'>
        <Title level={5}>Sou Psicólogo(a)</Title>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, neque?</Text>
      </ButtonCustom>
    </Space>
  </Box>
);
