import axios from "axios";

export default class ApiService {
  constructor() {
    this.Api = axios.create({
      baseURL: "http://localhost:5000/",
      headers: { Authorization: `bearer ${sessionStorage.accessToken}` },
    });
  }
}
