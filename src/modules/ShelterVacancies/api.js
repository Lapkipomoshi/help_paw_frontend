import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class ShelterVacancies extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getVacanciesByShelterId(id) {
    return fetch(`${this._baseUrl}/v1/shelters/${id}/vacancies`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }
}

const shelterVacanciesApi = new ShelterVacancies({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default shelterVacanciesApi;
