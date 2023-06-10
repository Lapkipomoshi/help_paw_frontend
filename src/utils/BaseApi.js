class BaseApi {
  constructor({ _baseUrl }) {
    this._baseUrl = _baseUrl;
  }

  _processTheResponse(res) { // обработка ответа
    if (res.ok) {
      return res.json(); // декодировка ответа из формата json в формат для работы с JS
    }
    return Promise.reject(`Ошибка: ${res}`);
  }
}

export default BaseApi;
