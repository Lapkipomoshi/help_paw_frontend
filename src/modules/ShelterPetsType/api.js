import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class ShelterPetsApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getPetsByShelterId(shelterId, animalType, limit, offset) { // offset - начиная с какого питомца по счёту
    return fetch(`${this._baseUrl}/v1/shelters/${shelterId}/pets/?animal_type=${animalType}&limit=${limit}&offset=${offset}`, {
      headers: this._headers,
    })
      .then((res) => {
        return super._processTheResponse(res);
      });
  }
}

const shelterPetsApi = new ShelterPetsApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default shelterPetsApi;
