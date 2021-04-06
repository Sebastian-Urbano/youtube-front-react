import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube-api-flask.herokuapp.com/",
});

export default instance;
