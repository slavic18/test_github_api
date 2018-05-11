import URLSearchParams from 'url-search-params';
import 'whatwg-fetch';
import { getCookie } from '../helpers/cookie';
import { GET, PATCH, DELETE, PUT, POST } from '../constants/RequestMethods';

const API_URL = '/api/v1';

class BaseService {
  getServiceUrl(withoutGateway) {
    let url = API_URL;
    if (this.gateway && !withoutGateway) {
      url += `/${this.gateway}`;
    }
    return url;
  }

  /**
   * @param {object} request
   * @param {object} request.url
   * @param {object} request.method
   * @param {object} request.params
   * @param {object} request.dataType
   * @param {object} request.handleErrors
   * @param {object} request.handleAdvancedErrors
   * @param {object} request.withoutGateway
   * @param {object} request.responseInJson
   * @param {object} request.acceptType
   * @returns promise
   */
  makeRequest({ ...request }) {
    let preparedUrl = this.getServiceUrl(request.withoutGateway);
    const defaultParams = {
      method: request.method,
      credentials: 'include',
      responseInJson: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'X-CSRFToken': getCookie('csrftoken'),
      },
    };

    const params = Object.assign({}, defaultParams, request);

    if (request.dataType && request.dataType === 'json') {
      params.headers['Content-Type'] = 'application/json';
    }
    if (request.dataType && request.dataType === 'multipart') {
      params.headers['Content-Type'] = 'multipart/form-data';
    }
    if (request.dataType && request.dataType === 'text/html') {
      params.headers['Content-Type'] = 'text/html';
    }
    if (request.acceptType && request.acceptType === 'text/html') {
      params.headers.Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
    }

    if (request.url) {
      preparedUrl += `/${request.url}`;
    }

    if (request.params) {
      if (
        request.method === GET ||
        request.method === DELETE
      ) {
        preparedUrl += `?${request.params.toString()}`;
      }

      if (request.method === POST || request.method === PUT) {
        preparedUrl += '/';
        params.body = request.params;
      }
      if (request.method === PATCH) {
        params.body = request.params;
      }
    }

    return fetch(`${preparedUrl}`, params)
      .then((response) => {
        if (request.handleErrors && !response.ok) {
          throw new Error(response.statusText);
        }

        if (request.handleAdvancedErrors && !response.ok && params.responseInJson) {
          return response.json().then(json => Promise.reject({
            success: response.ok,
            status: response.status,
            statusText: response.statusText,
            data: json,
          }));
        }

        return params.responseInJson ? response.json() : response.text();
      });
  }
}

export default BaseService;
