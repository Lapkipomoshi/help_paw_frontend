import { baseUrl, apiHeaders } from '../../utils/constants';

class PaperApi {
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

  getPaper(id) { // загрузка часто задаваемых вопросов
    return fetch(`${this._baseUrl}/v1/help-articles/${id}`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }
}

const paperApi = new PaperApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default paperApi;
