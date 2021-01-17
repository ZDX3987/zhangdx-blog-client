export const navData = [
  {index: 1, text: '首页', href: '/'},
  {index: 2, text: '分类', href: '/categories'},
  {index: 3, text: '归档', href: '/archives'},
  {
    index: 4, text: '关于博客', href: '', children: [
      {index: 4 - 1, text: '更新日志', href: '/update'},
      {index: 4 - 2, text: '关于博主', href: '/me'}
    ]
  }]
