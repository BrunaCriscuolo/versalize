import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

import Routes from './routes';
import { history } from './services/history';

import { GlobalStyles, InputStyles } from './styles';

const App = () => (
  <ConfigProvider locale={ptBR}>
    <GlobalStyles />
    <InputStyles />
    <Router history={history}>
      <Routes />
    </Router>
  </ConfigProvider>
);

export default App;
