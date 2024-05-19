import { baseUrl } from '../../utils/constants';

class AddArticleApi {
  constructor(options) {
    this._baseUrl = options._baseUrl;
  }

  _processTheResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  postArticle(token, article) {
    return fetch(`${this._baseUrl}/v1/my-shelter/news/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(article),
    })
      .then((res) => {
        return this._processTheResponse(res);
      });

  }
}

const addArticleApi = new AddArticleApi({
  _baseUrl: baseUrl,
});

export default addArticleApi;
