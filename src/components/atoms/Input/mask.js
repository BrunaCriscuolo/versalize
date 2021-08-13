import MaskedInput from 'antd-mask-input';

export const InputMask = ({ mask, name, onChange }) => (
  <MaskedInput mask={mask} name={name} onChange={onChange} />
);
