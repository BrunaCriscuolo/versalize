import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

import Routes from './routes';
import history from './services/history';
import { persistor, store } from './store';
import { GlobalStyles, InputStyles } from './styles';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={ptBR}>
        <GlobalStyles />
        <InputStyles />
        <Router history={history}>
          <Routes />
        </Router>
      </ConfigProvider>
    </PersistGate>
  </Provider>
);

export default App;
