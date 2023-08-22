import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "42792e702bdfaa79e4dcffe831c6aa8b",
  },
});

console.log(instance);
export default instance;
