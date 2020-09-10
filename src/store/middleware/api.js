import * as actions from "../api";
import Axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  console.log("DEBUG", action.type);
  const { url, method, data, onSuccess, onError, onStart } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await Axios.request({
      baseURL,
      url,
      method,
      data,
    });

    dispatch(actions.apiCallSuccess(response.data));

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apiCallFailed(error.message));

    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
