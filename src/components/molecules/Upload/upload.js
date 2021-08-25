import { Button } from '../../atoms/Button/button';
import { Text } from '../../atoms/Typography/typography';
import { Space } from '../../atoms/Space/space';

import { Icons } from '../../../variables';

import { Upload as U, Container } from './styles';

export const Upload = ({ label, onChange, type = 'button', imageUrl }) => {
  const { Upload: UploadIcon, Plus } = Icons;
  const uploadButton = (
    <div>
      <Plus />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      {type === 'button' ? (
        <U onChange={onChange}>
          <Button icon={<UploadIcon />} label={label} block type='primary' />
        </U>
      ) : (
        <Container>
          <Space className='teste'>
            <U
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            >
              {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
            </U>
            <Text>Allowed *.jpeg, *.jpg, *.png, *.gif<br />
              max size of 3.1 MB</Text>
          </Space>
        </Container>
      )}
    </>
  );
};
