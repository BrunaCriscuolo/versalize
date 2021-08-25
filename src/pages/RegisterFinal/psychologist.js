import { FormPsychologistFinal } from '../../components/organisms/FormRegisterFinal/psychologist';
import { RefisterFinal } from '../../templates/RegisterFinal/registerFinal';

const RefisterFinalPatient = () => {
  const alert = {
    message: 'Finalizar cadastro!',
    description: 'Finalize seu cadastro para que você possa escolher seus pacientes!'
  };
  const onSubmitRegister = data => {
    console.log(data);
  };
  const handleChangeChecks = () => {
    console.log('data');
  };
  return (
    <RefisterFinal
      alert={alert}
      form={(
        <FormPsychologistFinal onSubmitRegister={onSubmitRegister} handleChangeChecks={handleChangeChecks} />
      )}
    />
  );
};
export default RefisterFinalPatient;
