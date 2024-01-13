module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '王鹏的个人空间'
          return args
        })
    }
  }
  