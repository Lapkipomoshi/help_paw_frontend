import { baseUrl, apiHeaders } from '../../utils/constants';

class PapersApi {
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

  getPapers() { // загрузка часто задаваемых вопросов
    return fetch(`${this._baseUrl}/v1/help-articles/`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }
}

const papersApi = new PapersApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default papersApi;
