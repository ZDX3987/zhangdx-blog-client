let websocket = null;
let host = process.env.NODE_ENV === 'development' ? 'localhost:8888' : 'www.zhangdx.cn';
let url = 'ws://' + host + '/websocket/';

export function initAnonymousWebSocket() {
    websocket = new WebSocket(url + 'anonymous');
    websocket.onopen = () => {
        console.log()
        console.log('链接成功')
    }
    websocket.error = () => {
        console.log('链接失败')
    }
}

export function initWebSocket(username) {
    websocket = new WebSocket(url + username);
    websocket.onopen = () => {
        console.log('链接成功')
    }
    websocket.error = () => {
        console.log('链接失败')
    }
}

export function closeWebSocket() {
    if (!websocket) {
        return;
    }
    websocket.close();
}