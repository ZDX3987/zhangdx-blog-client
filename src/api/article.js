import http from '../http/index'

const url = '/api/client';

export default {
  getArticleByPage(formData) {
    return http.get(url + '/article/articles', {params: formData});
  },
  getArticleById(id) {
    return http.get(url + '/article/article/' + id);
  }
}
