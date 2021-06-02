import Vue from 'vue'
import Router from 'vue-router'
import ArticlePreview from "../components/article/ArticlePreview";
import Error from '../components/common/Error'
import CateList from "../components/category/CateList";
import Classify from "../components/classify/Classify";
import Archives from "../components/archives/Archives";
import UpdateLog from "../components/updatelog/UpdateLog";
import TopicList from "../components/topic/TopicList";
import TopicItem from "../components/topic/TopicItem";
import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';
import SearchResult from '../components/search/SearchResult';
import ReceiveToken from '../components/common/ReceiveToken';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta: {title: '首页'},
      redirect: {name: 'Home'},
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
          meta: {title: '首页'},
        },
        {
          path: '/article/:id.html',
          name: 'ArticlePreview',
          component: ArticlePreview,
          meta: {
            title: '文章详情'
          }
        },
        {
          path: '/cate/:id.html',
          name: 'CateList',
          component: CateList,
          meta: {
            title: '分类标签'
          }
        },
        {
          path: '/classify',
          name: 'Classify',
          component: Classify,
          meta: {
            title: '文章分类'
          }
        },
        {
          path: '/archives',
          name: 'Archives',
          component: Archives,
          meta: {
            title: '归档'
          }
        },
        {
          path: '/topics',
          name: 'TopicList',
          component: TopicList,
          meta: {
            title: '所有专题'
          }
        },
        {
          path: '/topic/:id.html',
          name: 'TopicItem',
          component: TopicItem,
          meta: {
            title: '专题'
          }
        },
        {
          path: '/updatelog',
          name: 'UpdateLog',
          component: UpdateLog,
          meta: {
            title: '更新日志'
          }
        },
        {
          path: '/search/_a',
          name: 'SearchResult',
          component: SearchResult,
          meta: {
            title: '搜索结果'
          }
        },
      ]
    },
      {
          path: '/receive_token',
          name: 'ReceiveToken',
          component: ReceiveToken,
          meta: {
              title: '授权登录'
          }
      },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        title: '页面出错了'
      }
    },
    {
      path: '/**',
      name: 'UnKnown',
      redirect: 'Error',
      meta: {
        title: '页面出错了'
      }
    }
  ]
})

// 自定义路由push跳转逻辑，解决路由自己跳转自己的错误
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router

