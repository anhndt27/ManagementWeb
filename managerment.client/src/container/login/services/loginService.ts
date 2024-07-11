import { store } from "../../../stores";
import { failed, setAuth } from "../../../stores/reducers/auth.reducer";
import { setLoading } from "../../../stores/reducers/common.reducer";
import API from "../api/login";

export const loginRequest = async ( loginInfor: object ) => {
    const { dispatch } = store;
    dispatch(setLoading(true));
    try {
      const request = await API.login(loginInfor);
      dispatch(setAuth(request.data));
    } catch (error) {
      dispatch(failed(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
  