import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class SheltersListApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getSheltersList() {
    return fetch(`${this._baseUrl}/v1/shelters/`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }

  // фильтрация на беке пока не работает корректно, позже, как будет готово, бэк даст знать
  //   getWarnings(warningValue) {
  //     const url = `${this._baseUrl}/v1/shelters/?warnings=${warningValue}`;

  //     return fetch(url, {
  //       headers: this._headers,
  //     }).then((res) => {
  //       return super._processTheResponse(res);
  //     });
  //   }
}

const sheltersLisApi = new SheltersListApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default sheltersLisApi;
