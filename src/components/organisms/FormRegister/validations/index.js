import { validateDocument, formatData } from '../../../../utils/data';

export const validator = {
  fullName: [
    { required: true, message: 'O nome completo é obrigatório' },
    { pattern: /^([\w]{3,})+\s+([\w\s]{3,})+$/i, message: 'O campo deve conter o primeiro nome e sobrenome, ambos sem acentos' }
  ],
  phone: [
    { required: true, message: 'O celular é obrigatório' },
  ],
  document: [
    { required: true, message: 'O CPF é obrigatório' },
    () => ({
      validator(_, value) {
        const isValid = validateDocument(formatData(value), 'CPF');
        if (isValid) return Promise.resolve();
        return Promise.reject(new Error('O CPF é inválido'));
      },
    }),
  ],
  birthday: [
    { required: true, message: 'A data de aniversário é obrigatória' },
  ],
  email: [
    { required: true, message: 'O e-mail é obrigatório' },
    { pattern: /^[-!#$%&'*+\0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/, message: 'E-mail invalido!' }
  ],
  day: [
    { required: true, message: 'O dia é obrigatório' },
  ],
  hour: [
    { required: true, message: 'O horário é obrigatório' },
  ]
};
