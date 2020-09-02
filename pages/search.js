import { Layout, Menu, Breadcrumb, Spin  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import SearchImages from '../components/search/SearchImages'
import SearchBar from '../components/search/SearchBar'
import Head from 'next/head'
import Drawer from '../components/Drawer'
import MainLayout from '../components/MainLayout'

const { Header, Sider, Content } = Layout;


export default function SearchKeyword ({data}) {


  const searchComponents = ( <>
                  <SearchBar/> 
                <SearchImages />
                </>
                )
    return (
    
    <MainLayout content={searchComponents} />
    
    )
  }

