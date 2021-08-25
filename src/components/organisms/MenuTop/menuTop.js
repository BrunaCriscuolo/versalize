
import { useDispatch } from 'react-redux';
import { MenuItem, SubMenu } from '../../atoms/Menu/menu';
import { Text } from '../../atoms/Typography/text';
import { Space } from '../../atoms/Space/space';
import { Icon } from '../../atoms/Icon/icon';

import { Icons } from '../../../variables';
import { logout } from '../../../store/modules/auth/actions';
import history from '../../../services/history';

import { Menu } from './styles';

export const MenuTop = () => {
  const dispatch = useDispatch();

  const { User, Export } = Icons;

  const handleChangePage = key => {
    if (key === 'exit') {
      dispatch(logout());
      return history.push('/');
    }

    history.push(key);
  };

  return (
    <Menu defaultSelectedKeys={['1']} mode='inline' onClick={({ key }) => handleChangePage(key)}>
      <SubMenu key='sub1' icon={<User />} title='Jurema da Silva Pereira Santos'>
        <MenuItem key='exit'>
          <Space direction='horizontal' size='small'><Icon as={Export} /><Text>Sair</Text></Space>
        </MenuItem>
      </SubMenu>
    </Menu>
  );
};
