
import { LayoutRegister } from '../../components/templates/Register';
import { FormPatient } from '../../components/organisms/FormRegister/patient';

const PageRegisterPatient = () => {
  const handleSubmit = values => {
    console.log('values', values);
  };
  const handleChange = value => {
    console.log('value', value);
  };
  return (
    <LayoutRegister
      title='Cadastre-se aqui!'
      subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam numquam? Molestias, repellendus? Libero.'
      form={
        <FormPatient
          onSubmitRegister={handleSubmit}
          handleChangeChecks={handleChange}
        />
      } />
  );
};
export default PageRegisterPatient;
