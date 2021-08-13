import { Content as C } from './styles';

export const Content = ({ children }) => (
  <C>
    <div className='site-layout-content'>
      {children}
    </div>
  </C>
);
