import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout';
import Home from '../views/Home';

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
          component: () => import('../views/ArticlePreview'),
          meta: {
            title: '文章详情'
          }
        },
        {
          path: '/cate/:id.html',
          name: 'CateList',
          component: () => import('../views/CateList'),
          meta: {
            title: '分类标签'
          }
        },
        {
          path: '/classify',
          name: 'Classify',
          component: () => import('../views/Classify'),
          meta: {
            title: '文章分类'
          }
        },
        {
          path: '/archives',
          name: 'Archives',
          component: () => import('../views/Archives'),
          meta: {
            title: '归档'
          }
        },
        {
          path: '/topics',
          name: 'TopicList',
          component: () => import('../views/TopicList'),
          meta: {
            title: '所有专题'
          }
        },
        {
          path: '/topic/:id.html',
          name: 'TopicItem',
          component: () => import('../views/TopicItem'),
          meta: {
            title: '专题'
          }
        },
        {
          path: '/updatelog',
          name: 'UpdateLog',
          component: () => import('../views/UpdateLog'),
          meta: {
            title: '更新日志'
          }
        },
        {
          path: '/search/_a',
          name: 'SearchResult',
          component: () => import('../views/SearchResult'),
          meta: {
            title: '搜索结果'
          }
        },
          {
              path: '/usercenter',
              name: 'UserCenter',
              component: () => import('../views/UserCenter'),
              meta: {
                  title: '个人中心'
              }
          },
      ]
    },
      {
          path: '/receive_token',
          name: 'ReceiveToken',
          component: () => import('../views/ReceiveToken'),
          meta: {
              title: '授权登录'
          }
      },
    {
      path: '/error',
      name: 'Error',
      component: () => import('../views/Error'),
      meta: {
        title: '页面出错了'
      }
    },
    {
      path: '/**',
      name: 'UnKnown',
      redirect: {name: 'Error'}
    }
  ]
})

// 自定义路由push跳转逻辑，解决路由自己跳转自己的错误
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location);
}

router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

export default router

