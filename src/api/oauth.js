import http from '../http';

const url = '/api/client/oauth';
export default {

    login(type) {
        return http.get(url + '/login/' + type);
    },

    getUserInfo(type, token) {
        return http.get(url + '/' + type + '/userinfo', {params: {'token': token}});
    }

}