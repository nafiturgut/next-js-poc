import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import LeftMenuBar from '../components/LeftMenuBar'
import dynamic from 'next/dynamic'

const ButtonDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Menu
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
      <LeftMenuBar />
      </Drawer>
    </>
  );
};

export default dynamic(() => Promise.resolve(ButtonDrawer), {
    ssr: false
  })