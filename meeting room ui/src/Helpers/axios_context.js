import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://authenticate-node.herokuapp.com/", // https://k5xee.sse.codesandbox.io", // ,
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`
  }
});

export default axios_instance;
