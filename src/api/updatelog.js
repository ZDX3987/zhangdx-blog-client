import http from '../http/index'

export default {

    getUpdateLogByPage(pageSize, pageIndex) {
        let formData = {
            'pageSize': pageSize,
            'pageIndex': pageIndex
        };
        return http.get('/api/client/update_log/update_log', {params: formData});
    }

}