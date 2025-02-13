import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Modal, Form, Input } from 'antd';
import { UserOutlined, InfoCircleOutlined, ProjectOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import './index.css';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">My Project</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={showModal}>
            Register
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            About Us
          </Menu.Item>
          <Menu.Item key="3" icon={<ProjectOutlined />}>
            Projects
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<CustomerServiceOutlined />} onClick={showDrawer}>
              Customer Service
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <p>Welcome to My Project</p >
          </Content>
        </Layout>
      </Layout>
      <Drawer title="Customer Service" placement="right" onClose={onClose} visible={visible}>
        <p>How can we help you?</p >
        <Input placeholder="Type your message here..." />
        <Button type="primary" style={{ marginTop: 16 }}>
          Send
        </Button>
      </Drawer>
      <Modal title="Register" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default App;