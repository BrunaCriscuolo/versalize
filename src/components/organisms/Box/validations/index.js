export const validator = {
  email: [
    { required: true, message: 'O e-mail é obrigatório' },
    { pattern: /^[-!#$%&'*+\0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/, message: 'E-mail invalido!' }
  ],
  password: [{ required: true, message: 'A senha é obrigatória' }]
};
