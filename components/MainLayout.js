import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Layout, Menu, Spin  } from 'antd';
import Drawer from '../components/Drawer'

const { Header, Sider, Content, Footer } = Layout;

export default function MainLayout({ content }) {
  return (
    
    <Layout >
      <Spin size="xlarge"/>

      <Head>
        <title>Nafi</title>
      </Head>

      <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>

      <Layout>   
      <Sider width={300} className="site-layout-background" >
      <Drawer/>
      </Sider>
        <Content>
          {content}
        
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
