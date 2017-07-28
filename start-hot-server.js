const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.hot.js')

const backendServer = require('./server')

const devServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/api': {
      target: 'http://localhost:3001/'
    }
  },
  contentBase: './build'
})

devServer.listen(3000, 'localhost', function (err, result) {
  if (err) return console.log(err)
  console.log('Dev server is listening at port 3000')
})

backendServer.listen(3001, 'localhost', (err, result) => {
  if (err) return console.log(err)
  console.log('Backend server is listening at port 3001')
})
