import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class PaperApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getPaperById(id) { // загрузка статьи с указанным id
    return fetch(`${this._baseUrl}/v1/help-articles/${id}`, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }
}

const paperApi = new PaperApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default paperApi;
