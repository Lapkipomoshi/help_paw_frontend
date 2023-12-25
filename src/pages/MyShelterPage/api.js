import BaseApi from '../../utils/BaseApi';
import { baseUrl } from '../../utils/constants';

class MyShelterApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getShelterById(id) {
    return fetch(`${this._baseUrl}/v1/shelters/${id}/`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }
}

const myShelterApi = new MyShelterApi({
  _baseUrl: baseUrl,
  _headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access')}`,
  },
});

export default myShelterApi;