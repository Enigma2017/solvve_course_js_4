import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default myAxios;
