import axios from "axios";

export default axios.create({
  baseURL: "https://api-deslocamento.herokuapp.com/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});