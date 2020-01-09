import config from '../config/app';
import * as API from './api-helper';
const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';
const isStage = nodeEnv === 'staging';

let API_ENDPOINT = config.development.api_endpoint;

if (isProd) {
  API_ENDPOINT = config.production.api_endpoint;
}

if (isStage) {
  API_ENDPOINT = config.staging.api_endpoint;
}

// add some pagination maybe
export const getRules = () => {
  const url = `${API_ENDPOINT}/rules`;
  return API.get(url);
};
