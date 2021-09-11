import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import history from '../services/history';

import { LayoutBasePrivate } from '../templates/BasePrivate/basePrivate';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const { token } = useSelector(({ auth }) => auth);
  // const typeUser = 'paciente';
  const typeUser = 'psicologo';

  useEffect(() => {
    if (isPrivate && !token) {
      history.push('/');
    }
  }, []);

  return (
    <>

      <Route
        {...rest}
        render={props => (
          <LayoutBasePrivate typeUser={typeUser}>
            <Component {...props} />
          </LayoutBasePrivate>
        )} />


      {/* {!isPrivate && (
        <Route
          {...rest}
          render={props => (
            <Component typeUser={typeUser} {...props} />
          )} />
      )} */}
    </>
  );
};

export default RouteWrapper;
