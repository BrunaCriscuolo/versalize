import { Profile as P } from '../../templates/Profile/profile';
import { FormProfile } from '../../components/organisms/FormProfile/formProfile';

const Profile = () => {
  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <P
      form={(
        <FormProfile
          onSubmitRegister={handleSubmit}
        />
      )}
    />
  );
};
export default Profile;
