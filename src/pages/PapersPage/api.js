import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class PapersApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getPapers(amount, offset = 0) {
    // загрузка указанного количества статей
    return fetch(`${this._baseUrl}/v1/help-articles/?limit=${amount}&offset=${offset}`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }
}

const papersApi = new PapersApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default papersApi;
