import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class NewApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getNewById(id) { // загрузка новости по id
    return fetch(`${this._baseUrl}/v1/news/${id}`, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }
}

const newApi = new NewApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default newApi;
