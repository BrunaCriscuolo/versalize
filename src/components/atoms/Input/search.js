import { InputSearch as Search } from './styles';

export const InputSearch = ({ value, onChange, placeholder, enterButton }) => (
  <Search
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    enterButton={enterButton}
  />
);
