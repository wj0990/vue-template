const DEFAULT_CONFIG = {
  // 标题
  APP_NAME: '项目',
  // 版本号
  APP_VERSION: '0.0.1'
}

if (process.env.NODE_ENV === 'production') {
  Object.assign(DEFAULT_CONFIG, APP_CONFIG)
}

export default DEFAULT_CONFIG
