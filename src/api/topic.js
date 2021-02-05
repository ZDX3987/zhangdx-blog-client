import http from '../http/index'

export default {
  getTopicByPage(formData) {
    return http.get('/api/client/topic/topics', {params: formData});
  },

  getTopicById(id) {
    return http.get('/api/client/topic/topic/' + id);
  }
}
