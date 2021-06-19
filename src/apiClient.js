import axios from 'axios';

const BASE_URI = 'http://localhost:5000';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  createtodo(repo) {
    return this.perform('post', '/todos', repo);
  }

  deletetodo(repo) {
    return this.perform('delete', `/todos/${repo.id}`);
  }

  gettodo() {
    return this.perform('get', '/todos');
  }


  puttodo(repo) {
    return this.perform('put', '/todos', repo);
  }

  async perform (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}

export default APIClient;