import {dev} from '../../config';

let websocket = null;


export function initAnonymousWebSocket() {
    websocket = new WebSocket(dev.webSocket + 'anonymous');
    websocket.onopen = () => {
        console.log('链接成功')
    }
    websocket.error = () => {
        console.log('链接失败')
    }
}

export function initWebSocket(username) {
    websocket = new WebSocket(dev.webSocket + username);
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