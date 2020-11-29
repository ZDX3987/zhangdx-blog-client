import http from '../http/index'

const url = '/api/client/category';

export default {
  getAllCategory() {
    return http.get(url + '/categories');
  },
}
