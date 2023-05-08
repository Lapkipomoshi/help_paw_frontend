import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class NewsApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getNews(amount) { // загрузка указанного количества новостей
    return fetch(`${this._baseUrl}/v1/news/?limit=${amount}`, {
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
