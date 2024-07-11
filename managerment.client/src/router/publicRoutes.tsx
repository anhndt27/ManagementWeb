import SignIn from "../container/login";
import PAGES from "./pages";

const publicRoutes = [
  {
    exact: true,
    name: "Sign In",
    key: PAGES.signIn,
    route: PAGES.signIn,
    component: <SignIn />,
  },
];

export default publicRoutes;
