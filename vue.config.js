module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'test-name' : '/',
    outputDir: 'test-name',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: true,
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      }
    } 
  }