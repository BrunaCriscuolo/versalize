import { Card as C } from './styles';

export const Card = ({ cover, actions, children }) => (
  <C
    cover={cover}
    actions={actions}
  >
    {children}
  </C>
);
