class MainApi {
  constructor(options) {
    this._baseUrl = options._baseUrl;
    this._headers = options._headers;
  }

  _processTheResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getFaq() { // загрузка часто задаваемых вопросов
    return fetch(`${this._baseUrl}/v1/faq`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }
}

const mainApi = new MainApi({
  _baseUrl: 'https://lapkipomoshi.ru/api',
  _headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
