import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class NewsApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getNews({ shelterId, amount }) { // загрузка новостей с параметрами у запроса
    return fetch(`${this._baseUrl}/v1/news/?${shelterId ? `shelter=${shelterId}&` : ''}limit=${amount}`, {
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
