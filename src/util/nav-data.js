export const navData = [
  {index: 1, text: '首页', href: '/', icon: 'fa fa-home'},
  {index: 2, text: '分类', href: '/classify', icon: 'fa fa-th'},
  {index: 3, text: '归档', href: '/archives', icon: 'fa fa-archive'},
  {
    index: 4, text: '关于博客', href: '', icon: 'fa fa-graduation-cap', children: [
      {index: 4 - 1, text: '更新日志', href: '/updatelog', icon: 'fa fa-'},
      {index: 4 - 2, text: '关于博主', href: '/usercenter', icon: 'fa fa-'}
    ]
  }]
