import styled from 'styled-components';

import { Upload as U } from 'antd';
import { Colors } from '../../../../variables';

const { gray600 } = Colors;

export const Upload = styled(U)`
  .ant-upload{
    display: block;
  }

  &.avatar-uploader{
    .ant-upload{
      border-radius: 100%;
      width: 120px;
      height: 120px;
      margin: auto;
    }
  }
`;

export const Container = styled.div`
 text-align: center;

  span{
    &.ant-typography{
      color: ${gray600};
      font-size: 0.8rem;
    }
  }

  .ant-space.ant-space-vertical{
    margin-top: 45%;
  }
`;
