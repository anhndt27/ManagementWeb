import Groups from "../container/groups/index.tsx";
import CreateGroup from "../container/groups/viewsDetails/create.tsx";
import EditGroup from "../container/groups/viewsDetails/edit.tsx";
import User from "../container/users/index.tsx";
import CreateUser from "../container/users/viewDetails/create.tsx";
import PAGES from "./pages.ts";
import { LogoutOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";

const privateRoutes = [
  {
    type: "tab",
    name: "Users",
    key: "users",
    route: PAGES.users,
    icon: <UserOutlined />,
    component: <User />,
  },
  {
    type: "tab",
    name: "Groups",
    key: "groups",
    route: PAGES.groups,
    icon: <UsergroupAddOutlined />,
    component: <Groups />,
  },

  // single pages
  {
    type: "page",
    key: "new-user",
    route: PAGES.createUser,
    component: <CreateUser />,
  },
  {
    type: "page",
    key: "edit-user",
    route: PAGES.editUser,
    component: <CreateUser />,
  },
  {
    type: "page",
    key: "create-group",
    route: PAGES.createGroup,
    component: <CreateGroup />,
  },
  {
    type: "page",
    key: "edit-group",
    route: PAGES.editGroup,
    component: <EditGroup />,
  },

  {
    type: "logout",
    key: "logout",
    name: "Log out",
    icon: <LogoutOutlined />,
  },
];

export default privateRoutes;
