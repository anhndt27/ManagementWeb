import React from "react";
import ReactLoading from "react-loading";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./stores/index";
import { combineProviders } from "./utils/combineProviders";
import { AntdControllerProvider } from "./context";

type AppProvidersProps = {
  children: React.ReactNode;
};

function ReduxProvider(props : any) {
  return <Provider store={store} {...props} />;
}

function Persist(props : any) {
  return <PersistGate persistor={persistor} loading={<ReactLoading type="cylon" />} {...props} />;
}

export const AppProviders = ({ children } : AppProvidersProps) =>
  combineProviders([AntdControllerProvider, ReduxProvider, Persist], children);
