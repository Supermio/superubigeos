import {SuperubigeosApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

export {SuperubigeosApplication};

export async function main(options: ApplicationConfig = {}) {
  if (!options) options = {};
  if (!options.rest) options.rest = {};
  options.rest.port = appEnv.isLocal ? options.rest.port : appEnv.port;
  options.rest.host = appEnv.isLocal ? options.rest.host : appEnv.host;

  const app = new SuperubigeosApplication(options);

  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
