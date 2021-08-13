
import { Login } from '../../components/templates/Login/login';

const PageLogin = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Login
      onSubmitLogin={handleSubmit}
    />
  );
};
export default PageLogin;
