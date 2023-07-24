import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class ShelterApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  // загрузка информации о приюте по его id
  getShelterById(id) {
    return fetch(`${this._baseUrl}/v1/shelters/${id}`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }

  getOwnerShelterInfo(token) {
    return fetch(`${baseUrl}/auth/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.error('Error fetching user info:', error);
        return false;
      });
  }

  // загрузка питомцев вида type у приюта с id в количестве limit, начиная с offset
  getPetsByShelterId(id, type, limit, offset) {
    return fetch(`${this._baseUrl}/v1/pets/?shelter=${id}&animal_type=${type}&?limit=${limit}&?offset=${offset}`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }
}

const shelterApi = new ShelterApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default shelterApi;
