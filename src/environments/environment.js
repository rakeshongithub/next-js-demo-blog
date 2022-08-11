let environment = {
  name: 'local',
  production: false,
  baseUrl: 'http://localhost:3200'
};

try {
  const configs = process.env.BUILD_ENV
    ? require(`./environment.${process.env.BUILD_ENV}.js`).default
    : {};
  environment = {
    ...environment,
    ...configs
  };
} catch (e) {
  envConfig = environment;
}

module.exports = environment;
