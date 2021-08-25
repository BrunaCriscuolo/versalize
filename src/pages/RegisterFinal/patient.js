import { FormPatientFinal } from '../../components/organisms/FormRegisterFinal/patient';
import { RefisterFinal } from '../../templates/RegisterFinal/registerFinal';

const RefisterFinalPatient = () => {
  const alert = {
    message: 'Finalizar cadastro!',
    description: 'Finalize seu cadastro para que possamos encontrar o melhor profissional para você!'
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
        <FormPatientFinal onSubmitRegister={onSubmitRegister} handleChangeChecks={handleChangeChecks} />
      )}
    />
  );
};
export default RefisterFinalPatient;
