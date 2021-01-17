export const navData = [
  {index: 1, text: '编程学习', href: '/', active: false},
  {index: 2, text: '其他分享', href: '/'},
  {
    index: 3, text: '关于博客', href: '#', children: [
      {index: 3 - 1, text: '更新日志', href: '/'},
      {index: 3 - 2, text: '关于博主', href: '/'}
    ]
  }]
