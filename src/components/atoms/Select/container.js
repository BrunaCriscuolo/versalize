import { Select as S } from './styles';

export const Select = ({ mode, onChange, placeholder, children }) => (
  <S
    mode={mode}
    allowClear
    placeholder={placeholder}
    onChange={onChange}
  >
    {children}
  </S>
);
