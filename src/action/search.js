import superagent from 'superagent';
import * as routes from '../routes';

export const getResults = results => ({
  type: 'SYMPTOM_RESULTS',
  payload: results,
});

export const getToken = token => ({
  type: 'GET_TOKEN',
  payload: token,
});

export const refreshToken = token => ({
  type: 'REFRESH_TOKEN',
  payload: token,
});

export const pSearchSymptoms = query => (store) => {
  return superagent.get(query) // eslint-disable-line
    .then((response) => {
      return store.dispatch(getResults(response.body));
    });
};

export const pGetToken = () => (store) => {
  return superagent.get(`${API_URL}${routes.BACKEND_GET_TOKEN}`) // eslint-disable-line
    .then((response) => {
      return store.dispatch(getToken(response.body));
    });
};

export const pRefreshToken = () => (store) => {
  return superagent.get(`${API_URL}${routes.BACKEND_REFRESH_TOKEN}`) // eslint-disable-line
    .then((response) => {
      return store.dispatch(refreshToken(response.body));
    });
};
