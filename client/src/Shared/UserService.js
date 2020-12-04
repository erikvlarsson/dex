import Api from "./Api";

class AuthService {
  async signup(userData) {
    let auth = null;
    await Api.post("/signup", userData)
      .then((response) => {
        if (response.status === 201) {
          sessionStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
          localStorage.email = userData.email;
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
