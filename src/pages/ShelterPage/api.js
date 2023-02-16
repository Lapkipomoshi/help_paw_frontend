import { baseUrl, apiHeaders } from '../../utils/constants';

class ShelterApi {
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

  getShelter(id) { // загрузка карточек приютов для главной страницы
    return fetch(`${this._baseUrl}/v1/shelters/${id}`, {
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

const shelterApi = new ShelterApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default shelterApi;
