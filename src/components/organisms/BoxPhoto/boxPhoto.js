
import { Box } from '../../molecules/Box/box';
import { Upload } from '../../molecules/Upload/upload';

export const BoxPhoto = () => (
  <Box className='box__form'>
    <Upload type='avatar' />
  </Box>
);
