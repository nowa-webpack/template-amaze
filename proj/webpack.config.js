module.exports = (config) => {
  config.module.loaders.push({
    test: /\.scss$/,
    loader: 'style!css!sass',
  });
};
