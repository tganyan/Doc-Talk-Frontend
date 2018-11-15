import superagent from 'superagent';
import * as routes from '../routes';

export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});

export const signupRequest = user => (store) => {
    return superagent.post(`${API_URL}${routes.BACKEND_SIGNUP}`) // eslint-disable-line
    .send(user)
    .then((response) => {
      return store.dispatch(set(response.text));
    });
};

export const loginRequest = user => (store) => {
    return superagent.get(`${API_URL}${routes.BACKEND_LOGIN}`) // eslint-disable-line
    .auth(user.username, user.password)
    .then((response) => {
      return store.dispatch(set(response.text));
    });
};
