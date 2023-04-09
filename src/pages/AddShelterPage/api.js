import { baseUrl } from '../../utils/constants';

class AddShelterApi {
  constructor(options) {
    this._baseUrl = options._baseUrl;
    this._headers = options._headers;
  }

  _processTheResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  postShelter(token, shelter) { // запрос на создание нового приюта
    return fetch(`${this._baseUrl}/v1/shelters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: shelter,
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }
}

const addShelterApi = new AddShelterApi({
  _baseUrl: baseUrl,
});

export default addShelterApi;
