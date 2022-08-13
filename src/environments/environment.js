let environment = {
  name: 'local',
  production: false,
  baseUrl: 'http://localhost:3200'
};

let envConfig = { ...environment };

try {
  const configs = process.env.BUILD_ENV
    ? require(`./environment.${process.env.BUILD_ENV}.js`).environment
    : {};
  envConfig = {
    ...environment,
    ...configs
  };
} catch (e) {
  envConfig = environment;
}

module.exports = envConfig;
