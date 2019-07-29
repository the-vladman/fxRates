import React from 'react';
import './App.css';
import {Layout, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <Typography>
        <Title style={{color: 'white' }}>Fx Rates</Title>
      </Typography>
    </Header>
    <Content style={{ height: 800, padding: '0 50px' }}>
      
    </Content>
  </Layout>
  );
}

export default App;
