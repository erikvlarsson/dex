import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000/";
export default class ApiService {
  constructor() {
    this.Api = axios.create({
      baseURL: baseURL,
      headers: { Authorization: `bearer ${sessionStorage.accessToken}` },
    });
  }
}
