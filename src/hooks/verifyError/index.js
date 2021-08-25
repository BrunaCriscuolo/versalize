

import { useNotification } from '../notification';

export const useVerifyError = (response) => {
  const { data: { status, messages } } = response;

  if (status === 401)
    return useNotification({ type: 'error', message: 'Ops! Ocorreu um erro.', description: 'E-mail e/ou senhas inválido(s)!' });

  for (const [, value] of Object.entries(messages)) {
    const { message } = value;
    return useNotification({
      type: 'error',
      message: 'Ops! Ocorreu um erro.',
      description: `${message}!`
    });
  }
};
