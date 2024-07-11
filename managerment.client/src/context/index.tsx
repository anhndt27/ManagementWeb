import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AntdContext = createContext(null);

AntdContext.displayName = "AntdContext";

function reducer(state : any, action : any) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    case "SIDEBAR_VISIBILITY": {
      return { ...state, sidebarVisibility: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Provider component cho Ant Design context
function AntdControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
    sidebarVisibility: true,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);
  const contextValue = [controller, dispatch];

  return <AntdContext.Provider value={contextValue}>{children}</AntdContext.Provider>;
}

// Custom hook để sử dụng context
function useAntdController() {
  const context = useContext(AntdContext);

  if (!context) {
    throw new Error(
      "useAntdController should be used inside the AntdControllerProvider."
    );
  }

  return context;
}

// Typechecking props cho AntdControllerProvider
AntdControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Các hàm hành động cho context
const setMiniSidenav = (dispatch : any, value : any) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch : any, value : any) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch : any, value : any) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch : any, value : any) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch : any, value : any) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch : any, value : any) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch : any, value : any) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch : any, value : any) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch : any, value : any) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch : any, value : any) => dispatch({ type: "DARKMODE", value });
const setSidebarVisibility = (dispatch : any, value : any) => dispatch({ type: "SIDEBAR_VISIBILITY", value });

export {
  AntdControllerProvider,
  useAntdController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
  setSidebarVisibility,
};
