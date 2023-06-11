import "./App.css";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu, Row, Col, Card, List } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Trang chủ", "1", <PieChartOutlined />),
  getItem("Shorts", "2", <DesktopOutlined />),
  getItem("Kênh đăng ký", "3", <ContainerOutlined />),
  getItem("Thư viện", "4", <MailOutlined />),
  getItem("Video đã xem", "5", <MailOutlined />),
  getItem("Video của bạn", "6", <MailOutlined />),
  getItem("Xem sau", "7", <MailOutlined />),
  getItem("Video đã thích", "8", <MailOutlined />),
  getItem("Thư viện", "9", <MailOutlined />),
  getItem("Kênh đăng ký", "sub1", <AppstoreOutlined />, [
    getItem("Kênh 1", "10"),
    getItem("Kênh 2", "11"),
    getItem("Kênh 3", "12"),
    getItem("Kênh 4", "13"),
  ]),
];

const videos = [
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
  {
    title: "Video title",
  },
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Row style={{ display: "flex", alignItems: "center", color: "#fff" }}>
        <Button
          onClick={toggleCollapsed}
          style={{
            margin: 14,
            backgroundColor: "inherit",
            color: "#fff",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <h1>Metube</h1>
      </Row>
      <Row>
        <Col flex="278px">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            style={{
              height: "91vh",
              fontSize: 20,
              position: "sticky",
            }}
          />
        </Col>
        <Col flex="auto">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={videos}
            renderItem={(item) => (
              <List.Item style={{margin:"20px"}}>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
          ,
        </Col>
      </Row>
    </>
  );
}

export default App;
