import { Button } from '../../atoms/Button/button';

import { Icons } from '../../../variables';

import { Upload as U } from './styles';

export const ButtonUpload = ({ label, onChange }) => {
  const { Upload: UploadIcon } = Icons;
  return (
    <U onChange={onChange}>
      <Button icon={<UploadIcon />} label={label} block type='primary' />
    </U>
  );
};
