import Head from 'next/head'
import { Layout, Menu, Breadcrumb, Spin  } from 'antd';
//import { getSortedPostsData } from '../lib/posts'
import ContentHeader from '../components/ContentHeader'
import {useEffect} from 'react'
import React from 'react';
import SummaryTab from '../components/SummaryTab'
import FilterTab from '../components/FilterTab'
import MainLayout from '../components/MainLayout'



const { Header, Footer, Sider, Content } = Layout;


export default function Home( {  } ) {
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];
  const data2 = [
    {
      id: 'Page A', value: 4000,
    },
    {
      id: 'Page B', value: 5000,
    },
    {
      id: 'Page C', value: 6000,
    },
  ];
  const allPostsData = []
  const date = '2020-10-10'
  useEffect( ()=> { 
    console.log('buradyauz')
  },
  []
  )

  const mainComponents = ( <>
    <FilterTab  selectData={data2} /> 
  <SummaryTab />
  <ContentHeader selectData={data2} lineData={data} />
  </>
  )

  

  return (
    <MainLayout content={mainComponents} />
  )
}

