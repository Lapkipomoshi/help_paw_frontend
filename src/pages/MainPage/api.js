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

  getSheltersOnMain(amount) { // загрузка карточек приютов для главной страницы
    return fetch(`${this._baseUrl}/v1/shelters/on-main/?limit=${amount}`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }

  getPapersOnMain(amount) { // загрузка полезных статей для главной страницы
    return fetch(`${this._baseUrl}/v1/help-articles/?limit=${amount}`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }

  getFaq() { // загрузка часто задаваемых вопросов
    return fetch(`${this._baseUrl}/v1/faq/`, {
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
