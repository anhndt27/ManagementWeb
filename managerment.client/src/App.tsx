import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { isExpired } from "react-jwt";
import privateRoutes from "./router/privateRoutes";
import { setLayout, useAntdController } from "./context";
import publicRoutes from "./router/publicRoutes";
import PAGES from "./router/pages";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { Breadcrumb, Button, Flex, Image, Layout, Menu, Row, Space, theme, Typography } from 'antd';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { LOGOUT } from "./constants/actionTypes";
import NCLogoWhite from "./assets/NCLogoWhite.png";
import NClogo from "./assets/NCLogo.png";

const { Header, Sider, Content } = Layout;

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [controller, dispatch] = useAntdController();
  const {
    layout,
  } = controller;
  const { pathname } = useLocation();
  const token = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.common.isLoading);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const reduxDispatch = useDispatch();
  // Setting the dir attribute for the body element
  // useEffect(() => {
  //   document.body.setAttribute("dir", direction);
  // }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    if (token && !isExpired(token)) {
        const _privateRouter = privateRoutes.map((route) => route.key);
        for (let i = 0; i < _privateRouter.length; i++) {
          if (location.pathname.includes(_privateRouter[i])) {
            navigate(location.pathname);
            break;
          }
        }
      navigate(PAGES.users);
    }
  }, [token]);

  const getRoutes = (allRouter: any) =>
    allRouter.map((route) => {
      if (location.pathname === "/") {
        navigate(PAGES.users);
        return null;
      }
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      else {
        return null;
      }
  });

  const handleLogout = () => {
    reduxDispatch({ type: LOGOUT });
  };

  useEffect(() => {
    if (!token ) {
      setLayout(dispatch, "page");
      navigate(PAGES.signIn);
      return;
    }
    setLayout(dispatch, "dashboard");
  }, [token]);

  const getCurrentPageName = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;

  return (
    <>
      {layout === "dashboard" && (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            {collapsed ? (
              <Flex justify="center" align="center">
                <Image width={"auto"} height={"auto"} src={NClogo} />
              </Flex>
            ) : (
              <Flex>
                <Image width={"auto"} height={"auto"} src={NCLogoWhite} />
              </Flex>
            )}
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {privateRoutes.map((route) => (
                <>
                  {route.type === "tab" ? (
                    <Menu.Item key={route.key} icon={route.icon}>
                      <Link to={route.route}>{route.name}</Link>
                    </Menu.Item>
                  ) : route.type === "logout" ? (
                    <Menu.Item
                      key={route.key}
                      icon={route.icon}
                      onClick={handleLogout}
                    >
                      <Typography.Text type="danger">
                        {route.name}
                      </Typography.Text>
                    </Menu.Item>
                  ) : null}
                </>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Space>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "18px",
                    width: 64,
                    height: 64,
                  }}
                />
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>{getCurrentPageName}</Breadcrumb.Item>
                </Breadcrumb>
              </Space>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                height: "100%",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>{getRoutes(privateRoutes)}</Routes>
            </Content>
          </Layout>
        </Layout>
      )}
      {layout === "page" && (
        <Routes>
          {publicRoutes.map((route) => (
            <>
              <Route
                key={route.key}
                path={route.route}
                exact={route.exact}
                element={route.component}
              />
            </>
          ))}
        </Routes>
      )}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: "10000",
            width: "100%",
            height: "100%",
            top: "0",
            backgroundColor: "#00000080",
          }}
        >
          <ReactLoading color="black" type="spin" width="100px" />
        </div>
      )}
    </>
  );
}