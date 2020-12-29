import axios from "axios";

/* Attach Authorization header for all axios requests. This is a function which will set authorization header when the token is present. */

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
