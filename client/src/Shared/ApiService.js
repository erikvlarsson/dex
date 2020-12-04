import axios from "axios";

export default class ApiService {
  constructor() {
    this.Api = axios.create({
      baseURL: "",
      headers: { Authorization: `bearer ${sessionStorage.accessToken}` },
    });
  }
}
