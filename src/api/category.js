import http from '../http/index'

const url = '/api/client/category';

export default {
  getAllCategory() {
    return http.get(url + '/categories');
  },

  getCategoryById(cateId) {
    return http.get(url + '/category/' + cateId);
  },
  getChildCateById(cateId) {
    return http.get(url + '/category/' + cateId + '/child');
  },
}
