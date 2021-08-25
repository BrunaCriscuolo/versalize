import { Select } from 'antd';

const { Option: O } = Select;

export const Option = ({ key, children }) => (
  <O key={key}>{children}</O>
);
