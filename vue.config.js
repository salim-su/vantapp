module.exports = {
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://localhost:8866/',
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
