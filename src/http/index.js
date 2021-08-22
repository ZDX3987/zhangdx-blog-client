import axios from 'axios'
import Router from '../router/index'
import {Notification} from 'element-ui'
import {setStorageItem} from '../util/storage-unit';
import fa from 'element-ui/src/locale/lang/fa';

const service = axios.create({
    baseURL: '',
    timeout: 15000,
})

// 请求计数器
let requestNum = 0;
let notification = null;

service.interceptors.request.use(request => {

    requestNum++;
    return request;
}, error => {
    requestNum = 0;
    Promise.reject(error);
});


service.interceptors.response.use(response => {
        requestNum--;
        storageToken(response);
        return Promise.resolve(response.data);
    },
    error => {
        if (notification && requestNum <= 0) {
            notification.closeAll();
        }
        let resp = error.response;
        errorHandle(resp);
        requestNum = 0;
        return Promise.reject(resp);
    });


function errorHandle(response) {
    notification = Notification.error({
        title: '错误（' + response.status + ')',
        message: '服务器出现错误，请稍后重试！',
        showClose: false
    })
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
