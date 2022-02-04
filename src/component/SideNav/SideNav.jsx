import React from "react";
import { Menu, Button } from 'antd';
import "antd/dist/antd.css";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
function Sidenav(props)
{
return (
    <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          // theme="dark"
          inlineCollapsed={props.openNav}
        >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
            Notes
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Reaminders
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Archieve
          </Menu.Item>
          
        </Menu>
    </div>
)
}

export default Sidenav