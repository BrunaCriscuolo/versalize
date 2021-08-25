import React, { useState } from 'react';

import { Layout } from '../../components/atoms/Layout/layout';
import { Content } from '../../components/atoms/Content/content';
import { Footer } from '../../components/molecules/Footer/footer';
import { Button } from '../../components/atoms/Button/button';
import { Col, Row } from '../../components/atoms/Grid/grid';
import { MenuTop } from '../../components/organisms/MenuTop/menuTop';
import { MenuSide } from '../../components/organisms/MenuSide/menuSide';
import { Image } from '../../components/atoms/Image/image';
import { Space } from '../../components/atoms/Space/space';

import { Icons } from '../../variables';

import { Header, Sider, LayoutResponsive } from './styles';

export const LayoutBasePrivate = ({ children, typeUser }) => {
  const { MenuFold, MenuUnfold } = Icons;

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Space>
          <Image src='' alt='Logo Versalize' className='i__circle' width={60} height={60} />
          <MenuSide typeUser={typeUser} />
        </Space>
      </Sider>
      <LayoutResponsive className={collapsed && 'menu__collapsed'}>
        <Header>
          <Row>
            <Col xs={6} sm={16} lg={16} xl={19} xxl={20}>
              <Button icon={collapsed ? <MenuUnfold /> : <MenuFold />} onClick={() => setCollapsed(!collapsed)} />
            </Col>
            <Col xs={18} sm={8} lg={8} xl={5} xxl={4}>
              <MenuTop />
            </Col>
          </Row>
        </Header>
        <Content>
          {children}
        </Content>
        <Footer />
      </LayoutResponsive>
    </Layout>
  );
};
