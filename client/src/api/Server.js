import axios from "axios";

const Server = axios.create({
  baseURL: "http://localhost:8080/",
});

export default Server;
