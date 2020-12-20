import http from '../http/index'

const url = '/api/client/settings';

export default {
  
  getAllFriendshipLink() {
    return http.get(url + '/friendship-links');
  },
}
