import axios from 'axios'
import Router from '../router/index'
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: '',
  timeout: 15000,
})

service.interceptors.response.use(response => {
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

export default service;
