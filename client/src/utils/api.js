import Axios from "axios";

export const ApiHandler = () => {
  return Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      ...Axios.defaults.headers,
     
    },
  });
};
