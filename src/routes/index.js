import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Login from '../pages/Login/login';
import RegisterPatient from '../pages/Register/patient';
import RegisterPsychologist from '../pages/Register/psychologist';

import RegisterFinalPatient from '../pages/RegisterFinal/patient';
import RegisterFinalPsychologist from '../pages/RegisterFinal/psychologist';
import Profile from '../pages/Profile/profile';
import DashboardPsychologist from '../pages/Dashboard/psychologist';
import DashboardPacient from '../pages/Dashboard/pacient';


const Routes = () => (
  <Switch>
    <Route path='/' exact component={Login} />
    <Route path='/login' exact component={Login} />
    <Route path='/cadastro/paciente' exact component={RegisterPatient} />
    <Route path='/cadastro/psicologo' exact component={RegisterPsychologist} />

    <Route path='/cadastro/paciente/finalizar' exact component={RegisterFinalPatient} isPrivate />
    <Route path='/cadastro/psicologo/finalizar' exact component={RegisterFinalPsychologist} isPrivate />
    <Route path='/perfil' exact component={Profile} isPrivate />
    <Route path='/dashboard/psicologo' exact component={DashboardPsychologist} isPrivate />
    <Route path='/dashboard/paciente' exact component={DashboardPacient} isPrivate />
  </Switch>
);

export default Routes;
