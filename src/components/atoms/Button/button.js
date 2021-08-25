import { Button as B } from './styles';

export const Button = ({
  htmlType,
  type,
  block,
  disabled,
  href,
  loading,
  onClick,
  label,
  icon,
  className
}) =>
  <B
    htmlType={htmlType}
    type={type}
    href={href}
    onClick={onClick}
    block={block}
    loading={loading}
    disabled={disabled}
    icon={icon}
    className={className}
  >
    {label}
  </B>;
