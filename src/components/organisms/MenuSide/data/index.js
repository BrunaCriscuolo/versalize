import { Icons } from '../../../../variables';

const { Menu, Edit, User } = Icons;

export const listPatient = [
  { label: 'Finalizar cadastro', key: '/cadastro/paciente/finalizar', icon: Edit },
  { label: 'Dashboard', key: '/dashboard/paciente', icon: Menu },
  { label: 'Perfil', key: '/perfil', icon: User },
];

export const listPsychologist = [
  { label: 'Finalizar cadastro', key: '/cadastro/psicologo/finalizar', icon: Edit },
  { label: 'Dashboard', key: '/dashboard/psicologo', icon: Menu },
  { label: 'Perfil', key: '/perfil', icon: User },
];

