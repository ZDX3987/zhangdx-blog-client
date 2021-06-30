import {getAuthorization} from '../util/storage-unit';

const auth = {
    inserted: function (el) {
        el.addEventListener('click', function ($event) {
            console.log($event)
            if (!getAuthorization()) {
                alert('请先登录以后操作！');
                return false;
            }
        });
    }
};

export default auth;