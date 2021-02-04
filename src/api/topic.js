import http from '../http/index'

export default {
    getTopicByPage(formData) {
        return http.get('/api/topic/topics', {params: formData})
    }
}