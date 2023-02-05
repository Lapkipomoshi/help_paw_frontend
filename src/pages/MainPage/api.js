import { baseUrl, apiHeaders } from '../../utils/constants';

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
    return fetch(`${this._baseUrl}/v1/faq/`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }

  getSheltersOnMain() { // загрузка часто задаваемых вопросов
    return fetch(`${this._baseUrl}/v1/shelters/on_main/`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }
}

const mainApi = new MainApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default mainApi;
