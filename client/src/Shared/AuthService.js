import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000/";

const Api = axios.create({
  baseURL: baseURL,
});

class AuthService {
  async signup(userData) {
    let auth = null;
    await Api.post("/signup", userData)
      .then((response) => {
        if (response.status === 201) {
          sessionStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
          localStorage.email = userData.email;
          sessionStorage.userId = response.data.userId;
          auth = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return auth;
  }

  async login(userData) {
    let auth = false;
    await Api.post("/login", userData)
      .then((response) => {
        if (response.status === 200) {
          auth = true;
          sessionStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
          localStorage.email = userData.email;
          sessionStorage.userId = response.data.userId;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return auth;
  }

  async getRefreshToken() {
    let auth = null;
    await Api.post(
      "/getRefreshToken",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.refreshToken,
        },
      }
    )
      .then((response) => {
        if (response.status === 201) {
          sessionStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
          sessionStorage.userId = response.data.userId;
          auth = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return auth;
  }

  async getAccessToken() {
    let auth = null;
    await Api.post(
      "/getAccessToken",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.refreshToken,
        },
      }
    )
      .then((response) => {
        if (response.status === 201) {
          sessionStorage.accessToken = response.data.accessToken;
          sessionStorage.userId = response.data.userId;
          auth = true;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return auth;
  }
}

export default AuthService;
