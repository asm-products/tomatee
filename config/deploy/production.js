module.exports = {
  assets: {
    accessKeyId: '', //your S3 access token. (required)
    secretAccessKey: '', //your S3 secret. (required)
    bucket: '', //your S3 bucket where the assets will be stored. (required)
    region: '', //the region your S3 bucket lives in. (options, default: 'us-east-1')
    filePattern: '**/*.{js,css}' //the filePattern to search for assets. (optional, default: '**/*.{js,css,png,gif,jpg}')
  },

  index: {
    host: '',
    port: '', //the redis port. (required)
    user: '',
    password: '' //the redis password. (optional, default: null)
  }
};
