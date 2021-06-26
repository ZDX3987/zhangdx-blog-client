import axios from 'axios'
import Router from '../router/index'
import {Message} from 'element-ui'
import {setStorageItem} from '../util/storage-unit';

const service = axios.create({
    baseURL: '',
    timeout: 15000,
})

service.interceptors.response.use(response => {

        storageToken(response);
        return Promise.resolve(response.data);
    },
    error => {
        let resp = error.response;
        errorHandle(resp);
        return Promise.reject(resp);
    });


function errorHandle(response) {
    Message({
        message: '服务器出现错误，请稍后重试！'
    });
    Router.push('/error');
}

function storageToken(response) {
    if (response.config.url === '/api/login') {
        let token = response.headers.authorization;
        if (token) {
            setStorageItem("Authorization", token);
        }
    }
}

export default service;
