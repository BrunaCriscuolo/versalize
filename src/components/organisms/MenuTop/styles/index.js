import styled from 'styled-components';
import { Menu as M } from '../../../atoms/Menu/menu';

import { Colors, Shadows } from '../../../../variables';

const { white } = Colors;
const { shadowLight04 } = Shadows;

export const Menu = styled(M)`
    &.ant-menu{
      margin: 10px 0;

      ul{
        &.ant-menu-sub{
          background: ${white};
          padding: 0 20px;
          margin-top: 17px;
          box-shadow: ${shadowLight04};
        }
        li{
          &.ant-menu-item-selected {
            background-color: transparent;
            &:after{
              border-right: transparent
            }
          }
        }
      }
    }
`;
