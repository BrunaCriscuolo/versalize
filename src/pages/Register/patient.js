
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormPatient } from '../../components/organisms/FormRegister/patient';
import { LayoutRegister } from '../../templates/Register/register';

import { formatData } from '../../utils/data';
import { formatDate } from '../../utils/date';

import { patientRegisterRequest } from '../../store/modules/patient/actions';

const PageRegisterPatient = ({ history }) => {
  const dispatch = useDispatch();

  const { patientRegisterSuccess, patientRegisterLoading } = useSelector(({ patient }) => patient);

  useEffect(() => {
    if (patientRegisterSuccess)
      history.push('/login');
  }, [patientRegisterSuccess]);

  const handleSubmit = values => {
    const { phone, document, email, birthday, fullName, socialName, gender, day, medicalReport, value, hour } = values;
    const phoneFormated = formatData(phone).replace('(', '').replace(')', '');
    let medicalReportFormated = false;

    if (medicalReport)
      medicalReportFormated = medicalReport?.target?.checked;

    const finalData = {
      celular: phoneFormated,
      cpf: formatData(document),
      dia: day,
      email,
      hora: hour,
      laudoMedico: medicalReportFormated,
      nascimento: formatDate(birthday, 'yyyy-MM-dd'),
      nomeCompleto: fullName,
      nomeSocial: socialName,
      sexo: gender,
      valor: value
    };
    dispatch(patientRegisterRequest(finalData));
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
          loading={patientRegisterLoading}
        />
      } />
  );
};
export default PageRegisterPatient;
