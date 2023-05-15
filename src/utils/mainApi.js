class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUsers() {
    return fetch(`${this._baseUrl}/users?page=1&per_page=10000`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  login(data) {
    return fetch(`${this._baseUrl}/login`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
  register(data) {
    return fetch(`${this._baseUrl}/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
}
export const mainApi = new MainApi({
  baseUrl: "https://reqres.in/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
