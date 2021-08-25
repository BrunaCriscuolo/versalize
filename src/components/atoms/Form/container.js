import { Form as F } from './styles';

export const Form = ({
  name,
  wrapperCol,
  initialValues,
  onFinish,
  onFinishFailed,
  layout = 'vertical',
  children
}) => (
  <F
    layout={layout}
    name={name}
    wrapperCol={wrapperCol}
    initialValues={initialValues}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    {children}
  </F>
);
