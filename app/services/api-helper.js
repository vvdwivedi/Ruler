import axios from 'axios';

const requestConfig = {
  url: '',
  method: 'get', // default
  baseURL: '',
  transformRequest: [
    function transformRequest(data) {
      // Do whatever you want to transform the data
      return data;
    },
  ],
  transformResponse: [
    function transformResponse(data) {
      // Do whatever you want to transform the data
      return data;
    },
  ],
  headers: {},
  params: {},
  timeout: 330000,
  withCredentials: false, // default
  responseType: 'json', // default
  maxContentLength: 50000,
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },
  maxRedirects: 5, // default
};

export const getFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignoring write error as of now
  }
};

export const clearFromLocalStorage = key => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

function getRequestConfig(apiConfig) {
  let config = Object.assign({}, requestConfig);
  const session = localStorage.getItem('user');
  if (apiConfig) {
    config = Object.assign({}, requestConfig, apiConfig);
  }
  if (session) {
    config.params.token = JSON.parse(session).id;
  }
  return config;
}

function getUrlWithToken(url) {
  // const user = localStorage.getItem('user');
  // if (!user) return url;
  // return `${url}${
  //   url.indexOf('?') !== -1
  //     ? `&access_token=${JSON.parse(user).id}`
  //     : `?access_token=${JSON.parse(user).id}`
  // }`;
  return url;
}

export const get = (url, params, apiConfig) => {
  const config = getRequestConfig(apiConfig);
  config.params = params;
  const request = axios.get(getUrlWithToken(url), config);
  return request;
};

export const post = (url, data, apiConfig) => {
  const config = getRequestConfig(apiConfig);
  let postData = {};
  if (
    apiConfig &&
    apiConfig.headers &&
    apiConfig.headers['Content-Type'] &&
    apiConfig.headers['Content-Type'] !== 'application/json'
  ) {
    postData = data;
    axios.defaults.headers.post['Content-Type'] =
      apiConfig.headers['Content-Type'];
  } else {
    postData = JSON.stringify(data);
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }
  const request = axios.post(getUrlWithToken(url), postData, config);
  return request;
};

export const put = (url, data) => {
  const config = getRequestConfig();
  config.headers['Content-Type'] = 'application/json';
  const request = axios.put(getUrlWithToken(url), JSON.stringify(data), config);
  return request;
};

export const patch = (url, data) => {
  const config = getRequestConfig();
  config.headers['Content-Type'] = 'application/json';
  const request = axios.patch(
    getUrlWithToken(url),
    JSON.stringify(data),
    config,
  );
  return request;
};

export const deleteResource = url => {
  const config = getRequestConfig();
  const request = axios.delete(getUrlWithToken(url), config);
  return request;
};
