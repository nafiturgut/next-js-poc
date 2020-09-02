import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, BarChartOutlined, SearchOutlined  } from '@ant-design/icons';
import dynamic from 'next/dynamic'
import React, {handleClick} from 'react';
import Link from 'next/link'


const { SubMenu } = Menu;

const LeftMenuSideBar = (  ) =>   {

    
    const handleClick = () => {
        console.log('Hi');
    };



    <Link href="/search">
    <a>Search</a> 
     </Link>

  
    return (       
        <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
            <BarChartOutlined />
              <span>Search Analysis</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">A/B Testing</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<SearchOutlined />} title="Example Search">
          <Menu.Item key="5" > 
            <Link href="/search">
            <a>Search</a> 
            </Link>  
          </Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  
}

export default dynamic(() => Promise.resolve(LeftMenuSideBar), {
    ssr: false
  })