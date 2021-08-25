import { Slider as S } from './styles';

export const Slider = ({ marks, defaultValue, value, min, max, onChange }) => (
  <S marks={marks} defaultValue={defaultValue} value={value} min={min} max={max} onChange={onChange} />
);
