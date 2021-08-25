
import { useEffect, useState } from 'react';

import { MenuItem, Menu } from '../../atoms/Menu/menu';

import { listPatient, listPsychologist } from './data';

import history from '../../../services/history';

export const MenuSide = ({ typeUser }) => {
  const [listItens, setListItens] = useState([]);

  useEffect(() => {
    if (typeUser === 'paciente')
      return setListItens(listPatient);
    setListItens(listPsychologist);
  }, [typeUser]);

  const handleChangePage = key => {
    history.push(key);
  };

  return (
    <Menu mode='inline' onClick={({ key }) => handleChangePage(key)} defaultSelectedKeys={typeUser === 'paciente' ? '/cadastro/paciente/finalizar' : '/cadastro/psicologo/finalizar'}>
      {listItens.map(item => (
        <MenuItem key={item.key} icon={<item.icon />}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
