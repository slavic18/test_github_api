import 'whatwg-fetch';

const API_URL = '//api.github.com/users';

class GithubUserService {
  static fetchOne(name) {
    return fetch(`${API_URL}/${name}`)
      .then((response) =>  response.json());
  }
}

export default GithubUserService;
