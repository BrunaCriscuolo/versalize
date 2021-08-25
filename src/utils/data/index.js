import { cpf, cnpj } from 'cpf-cnpj-validator';

export const formatData = (value) => value.replace(/(\.|\/|-|_)/g, '');

export const validateDocument = (value, type) => {
  const isDocumentValid = type === 'CPF' ? cpf.isValid(value) : cnpj.isValid(value);
  return isDocumentValid;
};
