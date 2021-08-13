export const validator = {
  fullName: [{ required: true, message: 'O Nome completo é obrigatório' }],
  password: [{ required: true, message: 'A senha é obrigatória' }],
  confirmPassword: [{ required: true, message: 'A confirmação da senha é obrigatória' }],
  phone: [{ required: true, message: 'O celular é obrigatório' }],
  document: [{ required: true, message: 'O CPF é obrigatório' }],
  birthday: [{ required: true, message: 'A data de aniversário é obrigatória' }],
  email: [{ required: true, message: 'O Email é obrigatório' }],
};
