
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Login } from '../../templates/Login/login';
import { loginRequest } from '../../store/modules/auth/actions';
import { useForm } from '../../hooks/form';

const PageLogin = ({ history, typeUser }) => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const { authLoading, authSuccess, token } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (authSuccess && token) {
      form.resetFields();
      window.scrollTo(0, 0);
      if (typeUser === 'paciente')
        return history.push('/cadastro/paciente/finalizar');

      history.push('/cadastro/psicologo/finalizar');
    }
  }, [authSuccess]);

  const handleSubmit = values => {
    const { email, password } = values;

    const formData = new FormData();
    formData.append('userName', email);
    formData.append('password', password);

    dispatch(loginRequest(formData));
  };

  return (
    <Login
      form={form}
      onSubmitLogin={handleSubmit}
      loading={authLoading}
    />
  );
};
export default PageLogin;
