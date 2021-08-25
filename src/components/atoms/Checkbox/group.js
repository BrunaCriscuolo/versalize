import { Checkbox as C } from 'antd';

export const CheckboxGroup = ({ onChange, options, defaultValue, className }) => (
  <C.Group options={options} defaultValue={defaultValue} onChange={onChange} className={className} />
);
