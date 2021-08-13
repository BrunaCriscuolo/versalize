import { Switch } from 'react-router-dom';

import Route from './routes';

import Login from '../pages/Login/login';
import RegisterPatient from '../pages/Register/patient';
import RegisterPsychologist from '../pages/Register/psychologist';
import Test from '../pages/tests';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Test} />
    <Route path='/login' exact component={Login} />
    <Route path='/cadastro/paciente' exact component={RegisterPatient} />
    <Route path='/cadastro/psicologo' exact component={RegisterPsychologist} />
  </Switch>
);

export default Routes;
