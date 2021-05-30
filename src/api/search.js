import http from '../http/index'

const url = '/api/client/search';

export default {
    search(keyword, pageIndex, pageSize) {
        let formData = {
            pageSize: pageSize,
            pageIndex: pageIndex,
            keyword: keyword
        };
        return http.get(url + '/_w', {params: formData});
    },

    getHotWord(pageIndex, pageSize) {
        let formData = {
            pageSize: pageSize,
            pageIndex: pageIndex
        };
        return http.get(url + '/hot_word', {params: formData});
    }
}