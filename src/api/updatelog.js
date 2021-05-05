import http from '../http/index'

export default {

    getUpdateLogByPage(pageSize, pageIndex, status) {
        let formData = {
            'pageSize': pageSize,
            'pageIndex': pageIndex,
            'status': status.toString()
        };
        return http.get('/api/client/update_log/update_log', {params: formData});
    }

}