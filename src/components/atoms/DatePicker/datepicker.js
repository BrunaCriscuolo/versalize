import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';

const D = generatePicker(dateFnsGenerateConfig);

export const DatePicker = ({ onChange, placeholder, value, format = 'DD/MM/YYYY', disabledDate }) => (
  <D
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    format={format}
    disabledDate={disabledDate}
  />
);
