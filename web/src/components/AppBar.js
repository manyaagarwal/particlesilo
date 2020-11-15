import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import ParticleSiloLogo from "../logowhite.svg";
import Background from "../assets/Images Website/Background.png";
import PlainBackground from "../assets/Images Website/Background_old.png";

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
    route: "/upload",
  },
];

export const AppBar = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(PlainBackground);
  const location = useLocation();
  const baseLength = process.env.PUBLIC_URL.length;
  const currentRoute = location.pathname.slice(baseLength);
  useEffect(() => {
    const img = currentRoute === "" ? Background : PlainBackground;
    setBackgroundImage(img);
    console.log("change")
  }, [currentRoute]);
  return (
    <Layout
      style={{
        height: "100vh",
        overflow: "scroll",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#006781",
        }}
      >
        <div className="logo">
          <img src={ParticleSiloLogo} height="100" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[currentRoute]}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "#006781",
          }}
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
