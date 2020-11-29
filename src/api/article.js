import http from '../http/index'

const url = '/api/client/article';

export default {
  getArticleByPage(formData) {
    return http.get(url + '/articles', {params: formData});
  },
  getArticleById(id) {
    return http.get(url + '/article/' + id);
  }
}
