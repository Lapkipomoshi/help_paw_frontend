import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class MainApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getSheltersOnMain(amount) { // загрузка карточек приютов для главной страницы
    return fetch(`${this._baseUrl}/v1/shelters/on-main/?limit=${amount}`, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }

  getPapersOnMain(amount) { // загрузка полезных статей для главной страницы
    return fetch(`${this._baseUrl}/v1/help-articles/?limit=${amount}`, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }

  getFaq(amount) { // загрузка часто задаваемых вопросов для главной страницы
    return fetch(`${this._baseUrl}/v1/faq/?limit=${amount}`, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }
}

const mainApi = new MainApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default mainApi;
