import http from '../http/index'

export default {
  getArticleByPage(formData) {
    return http.get('/api/article/articles', {params: formData});
  },
}
