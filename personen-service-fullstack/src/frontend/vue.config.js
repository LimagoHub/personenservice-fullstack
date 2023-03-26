const { defineConfig } = require('@vue/cli-service')

module.exports = {
  transpileDependencies: true,
  // https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
