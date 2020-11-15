import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import ParticleSiloLogo from "../logo.svg";
import Background from "../assets/Images Website/Background.png"

const { Header, Content } = Layout;

const items = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Useful Resources",
    route: "/resources",
  },
  {
    title: "Tips and Tricks",
    route: "/tips-tricks",
  },
  {
    title: "SciComm Forum",
    route: "/forum",
  },
  { 
    title: "Upload", 
    route: "/upload"
  }
];

export const AppBar = ({ children }) => {
  const location = useLocation();
  const baseLength = process.env.PUBLIC_URL.length;
  const currentRoute = location.pathname.slice(baseLength);
  return (
    <Layout style={{ height: "100vh", overflow: "scroll", backgroundImage:`url(${Background})` }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor:"white"
        }}
      >
        <div className="logo">
          <img src={ParticleSiloLogo} height="100" />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[currentRoute]}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.route}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link to={item.route}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 100,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};
