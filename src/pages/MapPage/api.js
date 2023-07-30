import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class MapApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getMap() {
    return fetch(`${this._baseUrl}/v1/shelters/`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }
}

const mapApi = new MapApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default mapApi;
