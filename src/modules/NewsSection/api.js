import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class NewsApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getNews({ shelterId, amount }) { // загрузка новостей с параметрами у запроса
    const apiUrl = shelterId
      ? `${this._baseUrl}/v1/shelters/${shelterId}/news/?limit=${amount}`
      : `${this._baseUrl}/v1/news/?limit=${amount}`;

    return fetch(apiUrl, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }
}

const newsApi = new NewsApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default newsApi;
