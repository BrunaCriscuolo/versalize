
import { LayoutRegister } from '../../templates/Register/register';
import { FormRegister } from '../../components/organisms/FormRegister/psychologist';

const PageRegisterPsychologist = () => {
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
        <FormRegister
          onSubmitRegister={handleSubmit}
          handleChangeChecks={handleChange}
        />
      } />
  );
};
export default PageRegisterPsychologist;
