import { useState } from 'react';
import { Text } from '../../atoms/Typography/typography';
import { Space } from '../../atoms/Space/space';
import { Modal } from '../../atoms/Modal/modal';

import { Icons } from '../../../variables';

import { Upload as U, Container } from './styles';

const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});


export const ImageUpload = () => {
  const { Plus } = Icons;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [fileLists, setFileLists] = useState([]);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList }) => setFileLists(fileList);

  const uploadButton = (
    <div>
      <Plus />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Container>
        <Space>
          <U
            listType='picture-card'
            className='avatar-uploader'
            fileList={fileLists}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileLists.length === 0 && uploadButton}
          </U>

          <Text>Permitida *.jpeg, *.jpg, *.png<br />
            tamanho máximo 2 MB</Text>
        </Space>
      </Container>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};
