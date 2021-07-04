import http from '../http/index'

const url = '/api/client/article';

export default {
  getArticleByPage(pageSize, pageIndex, queryStatus, sort, queryCateId) {
    let formData = {
      pageSize: pageSize,
      pageIndex: pageIndex,
      articleStatus: queryStatus,
      sort: sort,
      cateId: queryCateId
    };
    return http.get(url + '/articles', {params: formData});
  },
  getArticleById(id) {
    return http.get(url + '/article/' + id);
  },

  getArchivesTimeline() {
    return http.get(url + '/archives/timeline');
  },

  getArticleForArchives(formData) {
    return http.get(url + '/archives/articles', {params: formData})
  },

  praiseArticle(type, articleId) {
    return http.put(url + '/article/praise/' + articleId, {type: type})
  },

  getPrevAndNextArticle(articleId) {
    return http.get(url + '/prev-next-article/' + articleId);
  },

  getRelatedArticles(articleId) {
    return http.get(url + '/related-articles/' + articleId);
  }
}
