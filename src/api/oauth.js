import http from '../http';

const url = '/api/client/oauth';
export default {

    login(type) {
        return http.get(url + '/login/' + type);
    },

    logout(type, token) {
        return http.get(url + '/revoke/' + type + '/' + token);
    },

    getUserInfo(type, token) {
        return http.get(url + '/' + type + '/userinfo', {params: {'token': token}});
    }

}